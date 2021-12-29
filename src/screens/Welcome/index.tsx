import React, { useCallback } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import aguando from '../../assets/watering.png';

import { Container, Title, Background, Description, Button } from './styles';

import colors from '../../styles/colors';

const Welcome = () => {
  const { navigate } = useNavigation();

  const handleStart = useCallback(() => {
    navigate('UserIdentification');
  }, []);

  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Title>

      <Background source={aguando} resizeMode='contain' />

      <Description>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Description>

      <Button onPress={handleStart}>
        <MaterialCommunityIcons
          name='chevron-right'
          size={34}
          color={colors.white}
        />
      </Button>
    </Container>
  );
};

export default Welcome;
