import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '../helpers/navigation-hooks';

export default function HomeScreen() {
  let { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Login Screen" onPress={() => navigate('login')} />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
