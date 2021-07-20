import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Material from './Material';

export default function Other(props: any) {
  const { materials } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{materials.name}</Text>
      {materials.parts.map((material: any, i: number) => (
        <Material key={i} item={material} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
