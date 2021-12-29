import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnviromentButtonProps {
  active: boolean;
}

export const Container = styled(RectButton)`
  background: ${colors.shape};
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 8px;

  ${(props: EnviromentButtonProps) =>
    props.active === true &&
    css`
      background: ${colors.green_light};
    `}
`;

export const Text = styled.Text`
  font-family: ${fonts.text};
  color: ${colors.heading};

  ${(props: EnviromentButtonProps) =>
    props.active === true &&
    css`
      font-family: ${fonts.heading};
      color: ${colors.green_dark};
    `}
`;
