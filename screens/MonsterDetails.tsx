import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import Ailments from '../components/Ailments';
import Habitats from '../components/Habitats';
import Physiology from '../components/Physiology';
import MaterialsList from '../components/MaterialsList';

export default function Other(props: any) {
  const monsterData = props.route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.basicInfo}>
        <Text style={styles.title}>Threat Level: {monsterData.threat}</Text>
        <Text style={styles.title}>Type: {monsterData.type}</Text>
      </View>
      <Ailments data={monsterData.ailments} />
      <Habitats data={monsterData.habitats} />
      <Physiology data={monsterData.physiology} />
      <MaterialsList materials={monsterData.materials[0]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: 'white'
  },
  basicInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
