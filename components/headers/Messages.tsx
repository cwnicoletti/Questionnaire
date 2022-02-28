import React from 'react';
import {Text, SafeAreaView} from 'react-native';

const Messages = () => {
  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: '200',
          padding: 5,
        }}>
        Messages
      </Text>
    </SafeAreaView>
  );
};

export default Messages;
