import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};
