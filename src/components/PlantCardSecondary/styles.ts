import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
  background-color: ${colors.shape};
  flex: 1;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 15px 20px 15px 5px;
  margin-bottom: 10px;
  flex-direction: row;
  min-height: 85px;
`;

export const DetailsArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled(SvgFromUri)``;

export const Text = styled.Text`
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin-left: 16px;
  font-size: 17px;
`;

export const HourArea = styled.View`
  align-items: flex-end;
`;

export const WateredText = styled.Text`
  font-family: ${fonts.text};
  color: ${colors.body_light};
  font-size: 16px;
`;

export const HourText = styled.Text`
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
  font-size: 17px;
  margin-top: 5px;
`;

export const DeleteButton = styled(RectButton)`
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 20px;
  padding: 20px 0px 20px 10px;
  width: 80px;
  /* height: 85px; */
  right: 15px;
  margin-top: 5px;
`;
