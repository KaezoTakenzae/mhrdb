import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import capitalise from '../lib/helperFuncs/capitalise';
import mapKeys from '../lib/helperFuncs/mapKeys';

type AilmentsProps = {
  data: Ailments
}

type Ailments = {
  blast: string,
  poison: string,
  waterblight: string,
  thunderblight: string,
  iceblight: string,
  sleep: string,
  paralysis: string,
  stun: string,
  fireblight: string,
  exhaust: string
};

const ailments: Ailments = {
  blast: 'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FStatus_Blastblight_Icon.png?alt=media&token=a1970661-7334-4c18-b75c-d461f5fdac08',
  poison: 'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FPoison_Icon.png?alt=media&token=0eff2ed4-151d-4fc3-8ba2-de1f15fae82d',
  waterblight: 'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FElement_Water_Icon.png?alt=media&token=981db223-9116-401e-be5d-a58a5a5bb949',
  thunderblight: 'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FElement_Thunder_Icon.png?alt=media&token=04faca6a-25a7-42f1-a94f-66bff2c48e95',
  iceblight: 'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FElement_Ice_Icon.png?alt=media&token=f3d95788-213c-405d-b5ca-3c422517046f',
  sleep: 'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FSleep_Icon.png?alt=media&token=fbffa40a-29c4-4ae7-81f4-efc86fa82f85',
  paralysis: 'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FParalysis_Icon.png?alt=media&token=f6805449-f4ac-4c8f-9022-9401ccaacd92',
  stun: 'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FStun_Icon.png?alt=media&token=822e6be9-c847-400b-ad5e-f4c5cd462886',
  fireblight: 'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FElement_Fire_Icon.png?alt=media&token=65f6a67b-2234-49e7-8433-650902daf9a7',
  exhaust: 'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FExhaust_Icon.png?alt=media&token=fcc1f5b7-bec1-47c3-ac47-e70dcb0a8aca'
};

export default function Ailments(props: AilmentsProps) {
  const { data } = props;
  const keys = mapKeys(data);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Ailments</Text>
      <View style={styles.container}>
      {keys.map((name, i: number) => (
        <View style={styles.ailment}>
          {ailments[name] ? (
            <Image style={styles.image} source={{ uri: ailments[name] }} />
          ) : null}
          <Text key={i} style={styles.ailmentText}>
            {capitalise(name)}
            {' : '}
            {data[name]}
          </Text>
        </View>
      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4
  },
  ailment: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4
  },
  ailmentText: {
    marginTop: 10,
    marginRight: 10
  },
  image: {
    height: 20,
    width: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
