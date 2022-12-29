import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CreateBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Acesso from '../screens/Acesso';
import Login from '../screens/Login';

const Tab = CreateBottomTabNavigator();

export default class ButtonTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name = "Login" component = {Login}/>
                    <Tab.Screen name = "Acesso" component = {Acesso}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}