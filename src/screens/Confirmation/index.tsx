import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../components';

import { Container, Content, Emoji, Title, Subtitle, Footer } from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄',
};

const Confirmation = () => {
  const { navigate } = useNavigation();

  const routes = useRoute();

  const { title, subtitle, buttonTitle, icon, nextScreen } =
    routes.params as Params;

  const handleInputValue = useCallback(() => {
    navigate(nextScreen);
  }, []);

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Footer>
          <Button title={buttonTitle} onPress={handleInputValue} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
