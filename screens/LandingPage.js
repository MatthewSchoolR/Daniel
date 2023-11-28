// screens/LandingPage.js
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const LandingPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to the App</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        buttonStyle={{ backgroundColor: 'red', marginBottom: 10 }}
      />
      <Button
        title="Registration"
        onPress={() => navigation.navigate('Registration')}
        buttonStyle={{ backgroundColor: 'black' }}
      />
    </View>
  );
};

export default LandingPage;
