// screens/HomePage.js
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const HomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Home</Text>
      <Button
        title="Logout"
        onPress={() => navigation.navigate('Login')}
        buttonStyle={{ backgroundColor: 'red', marginBottom: 10 }}
      />
    </View>
  );
};

export default HomePage;
