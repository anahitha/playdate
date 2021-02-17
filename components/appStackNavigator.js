import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/home';
import InviteDetails from '../screens/details';

export const AppStackNavigator = createStackNavigator({
    Home: {screen: HomeScreen, 
    navigationOptions: {headerShown: false}},
    ReceiverDetails: {screen: ReceiverDetails,
    navigationOptions: {headerShown: false}}
},{

    initialRouteName: 'Home'
})