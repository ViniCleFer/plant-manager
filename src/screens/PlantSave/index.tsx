import React, { useEffect, useCallback, useState } from 'react';
import { Platform, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

import { Button } from '../../components';

import waterdrop from '../../assets/waterdrop.png';

import {
  Scroll,
  Container,
  PlantInfo,
  Photo,
  Name,
  Description,
  Controller,
  Tip,
  TipImage,
  TipText,
  AlertText,
  DateTimePickerButton,
  DateTimePickerText,
} from './styles';
import { PlantsProps, savePlant } from '../../libs/storage';

interface Params {
  plant: PlantsProps;
}

const PlantSave = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const { goBack, navigate } = useNavigation();

  const routes = useRoute();

  const { plant } = routes.params as Params;

  useEffect(() => {}, []);

  const handleOpenDateTimePickerOnAndroid = useCallback(() => {
    setShowDatePicker((oldState) => !oldState);
  }, []);

  const handleChangeTime = useCallback(
    (event: Event, dateTime: Date | undefined) => {
      if (Platform.OS === 'android') {
        setShowDatePicker((oldState) => !oldState);
      }

      if (dateTime && isBefore(dateTime, new Date())) {
        setSelectedDateTime(new Date());
        return Alert.alert('Escolha uma hora no futuro! ⏰');
      }

      if (dateTime) {
        setSelectedDateTime(new Date());
      }
    },
    []
  );

  const handleSave = useCallback(async () => {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });
    } catch (error) {
      Alert.alert('Não foi possível salvar 🥲');
    }
  }, []);

  return (
    <Scroll>
      <Container>
        <PlantInfo>
          <Photo uri={plant.photo} width={150} height={150} />

          <Name>{plant.name}</Name>
          <Description>{plant.about}</Description>
        </PlantInfo>
        <Controller>
          <Tip>
            <TipImage source={waterdrop} width={56} height={56} />
            <TipText>{plant.water_tips}</TipText>
          </Tip>
          <AlertText>Ecolha o melhor horário para ser lembrado:</AlertText>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode='time'
              display='spinner'
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <DateTimePickerButton onPress={handleOpenDateTimePickerOnAndroid}>
              <DateTimePickerText>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
              </DateTimePickerText>
            </DateTimePickerButton>
          )}

          <Button title='Cadastrar planta' onPress={handleSave} />
        </Controller>
      </Container>
    </Scroll>
  );
};

export default PlantSave;
