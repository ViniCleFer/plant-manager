import React, { useEffect, useCallback, useState } from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../components';

import {
  Container,
  KeyboardContent,
  Content,
  Form,
  Header,
  Emoji,
  Text,
  Input,
  Footer,
} from './styles';

const UserIdentification = () => {
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { navigate } = useNavigation();

  useEffect(() => {
    async function loadUser() {
      const nameStorage = await AsyncStorage.getItem('@plantmanager:user');

      if (nameStorage) {
        navigate('Confirmation', {
          title: 'Prontinho',
          subtitle:
            'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
          buttonTitle: 'Começar',
          icon: 'smile',
          nextScreen: 'PlantSelect',
        });
      }
    }

    loadUser();
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputValue = useCallback((value: string) => {
    setIsFilled(!!value);
    setName(value);
  }, []);

  const handleConfirmation = useCallback(async () => {
    if (!name) {
      return Alert.alert('Me diz como chamar você 🥲');
    }

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);

      navigate('Confirmation', {
        title: 'Prontinho',
        subtitle:
          'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch {
      Alert.alert('Não foi possível salvar o seu nome 🥲');
    }
  }, [name]);

  return (
    <Container>
      <KeyboardContent behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? '😄' : '😀'}</Emoji>
                <Text>
                  Como podemos {'\n'}
                  chamar você?
                </Text>
              </Header>

              <Input
                value={name}
                onChangeText={handleInputValue}
                placeholder='Digite um nome'
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                isFocused={isFocused || isFilled}
              />

              <Footer>
                <Button title='Confirmar' onPress={handleConfirmation} />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardContent>
    </Container>
  );
};

export default UserIdentification;
