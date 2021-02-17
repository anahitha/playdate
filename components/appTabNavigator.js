import * as React from 'react';
import {Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/home';
import AddInvite from '../screens/createEvent';
import {AppStackNavigator} from './appStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
    invite : { screen: AddInvite,
    navigationOptions: {
        /*tabBarIcon: 
        <Image source= {require("../assets/request-book.png")}
        style = {{
          width: 40,
          height:40
        }}></Image>,*/
        tabBarLabel: "Add Invite"
    }},
    home: { screen: AppStackNavigator,
        navigationOptions: {
            /*tabBarIcon: 
            <Image source= {require("../assets/request-list.png")}
            style = {{
              width: 40,
              height:40
            }}></Image>,*/
            tabBarLabel: "Home"
        }}
  });
