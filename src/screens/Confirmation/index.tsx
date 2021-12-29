import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components';

import { Container, Content, Emoji, Title, Subtitle, Footer } from './styles';

const Confirmation = () => {
  const { navigate } = useNavigation();

  const handleInputValue = useCallback(() => {
    navigate('PlantSelect');
  }, []);

  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <Title>Prontinho</Title>
        <Subtitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Subtitle>
        <Footer>
          <Button title='Começar' onPress={handleInputValue} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
