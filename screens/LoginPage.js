// screens/LoginPage.js
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';

const LoginPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <Input placeholder="Username" inputStyle={{ marginBottom: 10 }} />
      <Input placeholder="Password" secureTextEntry inputStyle={{ marginBottom: 20 }} />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Home')}
        buttonStyle={{ backgroundColor: 'red', marginBottom: 10 }}
      />
      <Button
        title="Registration"
        onPress={() => navigation.navigate('Registration')}
        buttonStyle={{ backgroundColor: 'black' }}
      />
      <Button
        title="Account Recovery"
        onPress={() => navigation.navigate('AccountRecovery')}
        type="clear"
        titleStyle={{ color: 'black' }}
      />
    </View>
  );
};

export default LoginPage;
