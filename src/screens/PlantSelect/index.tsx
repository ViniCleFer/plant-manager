import React, { useCallback } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import aguando from '../../assets/watering.png';

import { EnviromentButton, Header } from '../../components';

import { Container, HeaderContainer, Title, Subtitle, List } from './styles';

import colors from '../../styles/colors';

const PlantSelect = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </HeaderContainer>

      <List
        data={[1, 2, 3, 4]}
        renderItem={() => <EnviromentButton text='Cozinha' />}
      />
    </Container>
  );
};

export default PlantSelect;
