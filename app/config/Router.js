import React, { Component } from 'react';
import { Platform, ScrollView} from 'react-native';
import { createDrawerNavigator, createStackNavigator, createTabNavigator } from 'react-navigation'; // 2.9.3
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../Home'
import Technology from '../Technology'
import Aljaseera from '../AlJaseera'
const TabsInDrawer = createDrawerNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        drawer: () => ({
          label: 'Top HeadLines',
          icon: ({ tintColor }) => (
            <MaterialIcons
              name="filter-1"
              size={24}
              style={{ color: tintColor }}
            />
          ),
        }),
      },
    },
    Technology: {
      screen: Technology,
      navigationOptions: {
        drawer: () => ({
          label: 'TechCrunch',
          icon: ({ tintColor }) => (
            <MaterialIcons
              name="filter-2"
              size={24}
              style={{ color: tintColor }}
            />
          ),
        }),
      },
    },
    Aljaseera: {
      screen: Aljaseera,
      navigationOptions: {
        drawer: () => ({
          label: 'Al Jaseera',
          icon: ({ tintColor }) => (
            <MaterialIcons
              name="filter-2"
              size={24}
              style={{ color: tintColor }}
            />
          ),
        }),
      },
    },
  });
  
  export default TabsInDrawer;