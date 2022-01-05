import React, { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import { Header, Load } from '../../components';

import waterdrop from '../../assets/waterdrop.png';

import {
  Container,
  SpotLight,
  Image,
  SpotLightText,
  Plants,
  PlantsText,
  PlantsList,
} from './styles';
import { loadPlant, PlantsProps, removePlant } from '../../libs/storage';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

const MyPlants = () => {
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState('');

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
      );
      setPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const handleRemove = useCallback(
    (plant: PlantsProps) => {
      Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
        {
          text: 'Não 🙏',
          style: 'cancel',
        },
        {
          text: 'Sim 🥲',
          onPress: async () => {
            try {
              await removePlant(plant.id);

              setPlants((oldData) =>
                oldData.filter((plnt: PlantsProps) => plnt.id !== plant.id)
              );
            } catch (error) {
              Alert.alert('Não foi possível remover! 🥲');
            }
          },
        },
      ]);
    },
    [plants]
  );

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <Header />

      <SpotLight>
        <Image source={waterdrop} />
        <SpotLightText>{nextWatered}</SpotLightText>
      </SpotLight>

      <Plants>
        <PlantsText>Próximas regadas</PlantsText>

        <PlantsList
          data={plants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => handleRemove(item)}
            />
          )}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
