import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import CustomMenu from './CustomMenu';
import Settings from '../screens/update';


export const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen: AppTabNavigator},
    Settings: {screen: Settings},
},{
    contentComponent: CustomMenu
},{
    initialRouteName: 'Home'
}
)