import styled, { css } from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type InputProps = {
  isFocused: boolean;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardContent = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 54px;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Text = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${colors.gray};
  color: ${colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;

  ${(props: InputProps) =>
    props.isFocused === true &&
    css`
      border-color: ${colors.green};
      border-bottom-width: 2px;
    `}
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 20px;
  margin-top: 40px;
`;
