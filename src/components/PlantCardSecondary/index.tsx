import React from 'react';
import { View, Animated } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  DetailsArea,
  Photo,
  Text,
  HourArea,
  WateredText,
  HourText,
  DeleteButton,
} from './styles';
import colors from '../../styles/colors';

interface PlantCardSecondaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export const PlantCardSecondary = ({
  data,
  handleRemove,
  ...rest
}: PlantCardSecondaryProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <DeleteButton onPress={handleRemove}>
              <Feather name='trash' size={32} color={colors.white} />
            </DeleteButton>
          </View>
        </Animated.View>
      )}
    >
      <Container {...rest}>
        <DetailsArea>
          <Photo uri={data.photo} width={50} height={50} />
          <Text>{data.name}</Text>
        </DetailsArea>

        <HourArea>
          <WateredText>Regar às</WateredText>
          <HourText>{data.hour}</HourText>
        </HourArea>
      </Container>
    </Swipeable>
  );
};
