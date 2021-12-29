import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.TouchableOpacity`
  height: 56px;
  /* width: 56px; */
  border-radius: 16px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  text-align: center;
  line-height: 25px;
  font-family: ${fonts.heading};
`;
