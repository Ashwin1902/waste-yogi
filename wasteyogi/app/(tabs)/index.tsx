import { View, Text } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const Index = () => {
  return (
    <StyledView className="flex-1 justify-center items-center">
      <StyledText className="text-3xl text-black bg-green-500">Index</StyledText>
    </StyledView>
  );
};

export default Index;