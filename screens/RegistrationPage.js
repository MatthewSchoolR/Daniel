// screens/RegistrationPage.js
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';

const RegistrationPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Registration</Text>
      <Input placeholder="Username" inputStyle={{ marginBottom: 10 }} />
      <Input placeholder="Password" secureTextEntry inputStyle={{ marginBottom: 20 }} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Login')}
        buttonStyle={{ backgroundColor: 'black', marginBottom: 10 }}
      />
    </View>
  );
};

export default RegistrationPage;
