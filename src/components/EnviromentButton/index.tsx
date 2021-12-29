import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Text } from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  text: string;
  active?: boolean;
}

export const EnviromentButton = ({
  text = '',
  active = false,
  ...rest
}: EnviromentButtonProps) => {
  return (
    <Container active={active} {...rest}>
      <Text active={active}>{text}</Text>
    </Container>
  );
};
