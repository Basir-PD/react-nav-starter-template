import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
