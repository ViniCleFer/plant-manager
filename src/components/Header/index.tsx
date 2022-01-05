import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, TextArea, Title, Name, Avatar } from './styles';

const MY_AVATAR = 'https://avatars.githubusercontent.com/u/33428828?v=4';

export const Header = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadUser() {
      const nameStorage = await AsyncStorage.getItem('@plantmanager:user');

      setName(nameStorage as string);
    }

    loadUser();
  }, []);

  return (
    <Container>
      <TextArea>
        <Title>Olá,</Title>
        <Name>{name}</Name>
      </TextArea>

      <Avatar source={{ uri: MY_AVATAR }} />
    </Container>
  );
};
