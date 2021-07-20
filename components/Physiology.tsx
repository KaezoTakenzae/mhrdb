import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

const damageKey = [
  'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/weapons%2FGreat_Sword.png?alt=media&token=771bf74b-4d82-42de-bbbe-9d94978e1895',
  'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/weapons%2FHammer.png?alt=media&token=5772d6e3-c591-456b-9a51-a61fbd37af70',
  'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/weapons%2FBullet.png?alt=media&token=e005ec66-4aaf-4ae3-baa4-b38730bd9b35',
  'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FElement_Fire_Icon.png?alt=media&token=65f6a67b-2234-49e7-8433-650902daf9a7',
  'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FElement_Water_Icon.png?alt=media&token=981db223-9116-401e-be5d-a58a5a5bb949',
  'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FElement_Thunder_Icon.png?alt=media&token=04faca6a-25a7-42f1-a94f-66bff2c48e95',
  'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FElement_Ice_Icon.png?alt=media&token=f3d95788-213c-405d-b5ca-3c422517046f',
  'https://firebasestorage.googleapis.com/v0/b/mhrise-db.appspot.com/o/statuses%2FElement_Dragon_Icon.png?alt=media&token=5e5a517b-70e5-44cb-9514-8430782bbb30'
];

const rowOrder = [
  'name',
  'blade',
  'blunt',
  'bullet',
  'fire',
  'water',
  'thunder',
  'ice',
  'dragon'
];

export default function Physiology(props: any) {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Physiology</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <View style={styles.tableRow}>
            <View style={styles.firstTableCell} />
            {damageKey.map((icon: any, i: number) => (
              <View key={i} style={styles.tableCell}>
                <Image style={styles.image} source={{ uri: icon }} />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.tableBody}>
          {data.map((part: any, i: number) => (
              <View key={i} style={styles.tableRow}>
                {rowOrder.map((cell: any, j: number) => (
                  <View key={j} style={j === 0 ? styles.firstTableCell : styles.tableCell}>
                    <Text>{part[cell]}</Text>
                  </View>
                ))}
              </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6
  },
  image: {
    height: 20,
    width: 20
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    overflow: 'hidden'
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  firstTableCell: {
    flex: 2,
    padding: 4
  },
  tableCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  tableBody: {
    display: 'flex'
  }
});
