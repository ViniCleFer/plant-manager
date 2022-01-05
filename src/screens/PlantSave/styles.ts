import styled from 'styled-components/native';
import { SvgFromUri } from 'react-native-svg';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
  },
})``;

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.background};
`;

export const PlantInfo = styled.View`
  flex: 1;
  width: 100%;
  padding: 0px 30px 50px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
`;

export const Photo = styled(SvgFromUri)``;

export const Name = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 15px;
`;

export const Description = styled.Text`
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.text};
  margin-top: 10px;
  /* margin-bottom: 70px; */
`;

export const Controller = styled.View`
  padding: 20px;
  background-color: ${colors.white};
  width: 100%;
`;

export const Tip = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.blue_light};
  padding: 10px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  font-size: 17px;
  text-align: justify;
  color: ${colors.blue};
  font-family: ${fonts.text};
  margin-left: 20px;
  flex: 1;
`;

export const AlertText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.complement};
  margin-bottom: 5px;
`;

export const DateTimePickerButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  align-items: center;
  padding: 0 40px;
`;

export const DateTimePickerText = styled.Text`
  font-size: 24px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;
