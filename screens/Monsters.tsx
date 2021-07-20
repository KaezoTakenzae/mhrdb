import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { firebase } from '../firebase';

import { View } from '../components/Themed';
import ListItem from '../components/ListItem';

import { MonsterItem, MonsterItemData } from '../types';

export default function TabOneScreen(props: any) {
  const [ monsters, setMonsters ] = useState<Array<MonsterItem>>([{ name: '' }]);

  useEffect(() => {
    firebase.firestore().collection('monsters').get().then(querySnapshot => {
      let monstersArr: any = [];
      querySnapshot.forEach(doc => {
        monstersArr.push({
          id: doc.id,
          ...doc.data()
        });
      })
      setMonsters(monstersArr);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={monsters}
        renderItem={(itemData: MonsterItemData) => (
          <ListItem key={itemData.item.name} title={itemData.item.name} onViewDetail={() => props.navigation.navigate("MonsterDetails", {
            ...itemData.item
          })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    width: '100%'
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
