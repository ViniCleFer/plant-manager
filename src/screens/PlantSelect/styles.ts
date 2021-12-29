import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;

export const HeaderContainer = styled.View`
  padding: 0 28px;
`;

export const Title = styled.Text`
  color: ${colors.heading};
  font-size: 17px;
  line-height: 20px;
  margin-top: 15px;
  font-family: ${fonts.heading};
`;

export const Subtitle = styled.Text`
  color: ${colors.heading};
  font-size: 17px;
  line-height: 20px;
  font-family: ${fonts.text};
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    height: 40,
    paddingLeft: 28,
    marginVertical: 28,
    justifyContent: 'center',
  },
})``;

export const Button = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  border-radius: 16px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  padding-left: 4px;
`;
