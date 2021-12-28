import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  padding: 0 50px;
  color: ${colors.heading};
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  margin-top: 28px;
`;

export const Background = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Description = styled.Text`
  padding: 0 44px;
  color: ${colors.grayDark};
  font-size: 17px;
  text-align: center;
  line-height: 25px;
`;

export const Button = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  border-radius: 16px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  padding-left: 4px;
`;
