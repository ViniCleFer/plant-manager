import React, { ReactNode, useCallback, useState } from 'react';
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

  const handleConfirmation = useCallback(() => {
    navigate('Confirmation');
  }, []);

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
