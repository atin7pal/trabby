import React,{Component} from 'react';
import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default class settingscreen extends React.Component{
    render(){
        return(
            <Animatable.View useNativeDriver = {true} animation = "bounceIn" style = {{flex : 1, backgroundColor : 'white'}} duration = {1000}>
               
               <View style = {styles.container}>
           <View style = {{marginTop : '20%'}}>
           <Text style = {{fontSize : 50,color : 'black',marginLeft : '10%'}}>Settings</Text>
           </View>
            
             <View style = {{marginLeft : '10%',marginTop : '7%'}}>
            <TouchableOpacity>
                <View style = {{flexDirection : 'row'}}>
                <Icon
                style = {{marginTop : 10}}
                name = "sliders"
                size = {24}
                color = "black"
                />
                    <Text style = {{fontSize : 35,marginLeft : 10}}>Appearance</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style = {{marginTop : 15}}>
            <View style = {{flexDirection : 'row'}}>
            <Icon
            style = {{marginTop : 10}}
            name = "figma"
            size = {24}
            color = "black"
            />
                    <Text style = {{fontSize : 35,marginLeft : 10}}>Entry Settings</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style = {{marginTop : 15}}>
            <View style = {{flexDirection : 'row'}}>
            <Icon
            style = {{marginTop : 10}}
            name = "alert-triangle"
            size = {24}
            color = "black"
            />
                    <Text style = {{fontSize : 35,marginLeft : 10}}>Notifications</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style = {{marginTop : 15}}>
            <View style = {{flexDirection : 'row'}}>
            <Icon
            style = {{marginTop : 10}}
            name = "server"
            size = {24}
            color = "black"
            />
                    <Text style = {{fontSize : 35,marginLeft : 10}}>Check Users</Text>
                </View>
            </TouchableOpacity>
            </View>
           </View>


            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create({
    container : 
    {
        flex : 1,
        
    }
})