import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 25px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.text};
  padding: 10px 0;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 20px;
`;
