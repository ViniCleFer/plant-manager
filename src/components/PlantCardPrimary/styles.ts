import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
  background-color: ${colors.shape};
  flex: 1;
  max-width: 45%;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 10px 0;
  margin: 10px;
`;

export const Photo = styled(SvgFromUri)``;

export const Text = styled.Text`
  font-family: ${fonts.heading};
  color: ${colors.green_dark};
  margin: 16px 0;
`;
