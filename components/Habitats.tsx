import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function Habitats(props: any) {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habitats ({data.length})</Text>
      <Text>
        {data.map((name: String, i: number) => (i === 0 ? name : `, ${name}`))}
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
