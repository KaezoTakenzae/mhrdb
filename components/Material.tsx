import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function Habitats(props: any) {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>
        Target: {item.target.qty}x {item.target.rate}%
      </Text>
      <Text>
        Capture: {item.capture.qty}x {item.capture.rate}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
