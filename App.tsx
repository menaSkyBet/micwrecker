import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.container}>
      {
        !clicked &&
        <Pressable testID='rapper-button' onPress={() => setClicked(true)}>
          <Text>Click to see the greatest rapper of all time!</Text>
        </Pressable>
      }
      {
        clicked &&
        <Text>Ludacris!</Text>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
