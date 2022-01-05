import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/server.json';

import {
  EnviromentButton,
  Header,
  Load,
  PlantCardPrimary,
} from '../../components';

import {
  Container,
  HeaderContainer,
  Title,
  Subtitle,
  ListEnviroments,
  Plants,
  ListPlants,
} from './styles';

import { View } from 'react-native';
import { PlantsProps } from '../../libs/storage';

interface PlantsEnvironmentsProps {
  key: string;
  title: string;
}

const PlantSelect = () => {
  const { navigate } = useNavigation();

  const [environmentsPlants, setEnvironmentsPlants] = useState<
    PlantsEnvironmentsProps[]
  >([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>(plants);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadPlantsEnvironments() {
      setEnvironmentsPlants([
        {
          key: 'all',
          title: 'Todos',
        },
        ...api.plants_environments,
      ]);
    }

    loadPlantsEnvironments();
  }, []);

  useEffect(() => {
    function loadPlants() {
      setPlants(api.plants as PlantsProps[]);
      setFilteredPlants(api.plants as PlantsProps[]);
      setLoading(false);
    }

    setTimeout(() => {
      loadPlants();
    }, 1000);
  }, []);

  const handleEnviroment = useCallback(
    (environment: string) => {
      setEnvironmentSelected(environment);

      if (environment === 'all') {
        setFilteredPlants(plants as PlantsProps[]);
      } else {
        const plantsFiltered = plants.filter((plant: PlantsProps) =>
          plant.environments.includes(environment)
        );

        setFilteredPlants(plantsFiltered);
      }
    },
    [plants]
  );

  const handlePlantSelect = useCallback((plant: PlantsProps) => {
    navigate('PlantSave', { plant });
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </HeaderContainer>

      <View>
        <ListEnviroments
          data={environmentsPlants}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <EnviromentButton
              text={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnviroment(item.key)}
            />
          )}
        />
      </View>

      <Plants>
        <ListPlants
          data={filteredPlants}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
        />
      </Plants>
    </Container>
  );
};

export default PlantSelect;
