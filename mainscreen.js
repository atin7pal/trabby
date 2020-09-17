import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import React from 'react';
import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import { TabBar } from 'react-native-animated-nav-tab-bar';
import menuscreen from './menuscreen';
import entryscreen from './entryscreen';
import settingscreen from './settingscreen';


const Screen = styled.View`
    flex : 1;
    background-color : white;
`

const TabBarIcon = (props) => 
{
    return(
        <Icon
            name={props.name}
            size={props.size ? props.size : 24}
            color={props.focused ? props.tintColor : "#222222"}

        />
    )
}

const HomeStack = createSwitchNavigator({
    Menu : menuscreen
})

const DiscoverStack = createSwitchNavigator({
    Entry: entryscreen
})


const ProfileStack = createSwitchNavigator({
    Settings : settingscreen
})

HomeStack.navigationOptions = 
{
    tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="th-large" />,
}

DiscoverStack.navigationOptions = 
{
    tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="plus" />,
}


ProfileStack.navigationOptions = 
{
    tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name="cog" />,
}

const styles = StyleSheet.create({
container : 
{
    flex : 1,
    
    
},

});

export default createAppContainer(
    createBottomTabNavigator(

        {
            Menu : HomeStack,
            Entry : DiscoverStack,
            Settings : ProfileStack,

        }, {
        tabBarOptions : {
            useNativeDriver : true,
            activeTintColor : "#2F7C6E",
            inactiveTintColor : "#222222",
        },

        tabBarComponent: props => <TabBar
            activeColors = {'black'}
            activeTabBackgrounds = {'#f08489'}
            {...props}
        />,
    }
    )
)