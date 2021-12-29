import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextArea = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: ${colors.heading};
  font-size: 32px;
  font-family: ${fonts.text};
`;

export const Name = styled.Text`
  color: ${colors.heading};
  font-size: 32px;
  font-family: ${fonts.heading};
  line-height: 40px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;
