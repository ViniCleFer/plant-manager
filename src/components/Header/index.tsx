import React from 'react';

import aguando from '../../assets/watering.png';

import { Container, TextArea, Title, Name, Avatar } from './styles';

export const Header = () => {
  return (
    <Container>
      <TextArea>
        <Title>Olá,</Title>
        <Name>Vinicius</Name>
      </TextArea>

      <Avatar source={aguando} />
    </Container>
  );
};
