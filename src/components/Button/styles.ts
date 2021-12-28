import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  border-radius: 16px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 17px;
  text-align: center;
  line-height: 25px;
`;
