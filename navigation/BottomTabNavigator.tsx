/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Monsters from '../screens/Monsters';
import MonsterDetails from '../screens/MonsterDetails';
import Quests from '../screens/Quests';
import Other from '../screens/Other';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import Search from './Search';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Monsters"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Monsters"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Quests"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Other"
        component={OtherNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Monsters"
        component={Monsters}
        options={{ headerTitle: props => <Search headerTitle='Monsters' {...props} /> }}
      />
      <TabOneStack.Screen
        name="MonsterDetails"
        component={MonsterDetails}
        //options={{ headerTitle: props => {console.log('props', props); return <Search headerTitle='MonsterDetails' {...props} />} }}
        options={(props: any) => ({
          headerTitle: () => <Search headerTitle={props.route.params.name} {...props} />
        })}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Quests"
        component={Quests}
        options={{ headerTitle: 'Quests' }}
      />
    </TabTwoStack.Navigator>
  );
}

const OtherStack = createStackNavigator<TabThreeParamList>();

function OtherNavigator() {
  return (
    <OtherStack.Navigator>
      <OtherStack.Screen
        name="Other"
        component={Other}
        options={{ headerTitle: 'Other' }}
      />
    </OtherStack.Navigator>
  );
}
