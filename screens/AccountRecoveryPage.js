// screens/AccountRecoveryPage.js
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';

const AccountRecoveryPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Account Recovery</Text>
      <Input placeholder="Enter your email" inputStyle={{ marginBottom: 20 }} />
      <Button
        title="Recover Account"
        onPress={() => navigation.navigate('Login')}
        buttonStyle={{ backgroundColor: 'black', marginBottom: 10 }}
      />
    </View>
  );
};

export default AccountRecoveryPage;
