import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Photo, Text } from './styles';

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export const PlantCardPrimary = ({ data, ...rest }: PlantCardPrimaryProps) => {
  return (
    <Container {...rest}>
      <Photo uri={data.photo} width={70} height={70} />
      <Text>{data.name}</Text>
    </Container>
  );
};
