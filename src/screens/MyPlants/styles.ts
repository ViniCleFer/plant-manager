import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 10px 28px;
  background-color: ${colors.background};
`;

export const SpotLight = styled.View`
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background-color: ${colors.blue_light};
  border-radius: 20px;
  flex-direction: row;
  height: 100px;
  width: 100%;
  margin-top: 30px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

export const SpotLightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding: 0 20px;
  text-align: justify;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsText = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin: 20px 0;
`;

export const PlantsList = styled.FlatList``;
