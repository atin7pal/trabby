import React, {Component} from 'react';
import {Button,TextInput,ScrollView,View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import addresident from './addresident';
import * as Animatable from 'react-native-animatable'




export default class menuscreen extends React.Component{
    render(){
        return(
            <Animatable.View useNativeDriver = {true} animation = "bounceIn" style = {{flex : 1, backgroundColor : 'white'}} duration = {1000}>

        <View style = {styles.container}>
            <View style = {{marginTop : '20%'}}>
           <Text style = {{fontSize : 50,color : 'black',marginLeft : '10%',fontFamily: 'Roboto'}}>Menu</Text>
           </View>
            
             <View style = {{marginLeft : '10%',marginTop : '7%'}}>
            <TouchableOpacity
            onPress = {() => this.props.navigation.navigate('resident')}>
                <View style = {{flexDirection : 'row'}}>
                <Icon
                style = {{marginTop : 5}}
                name='plus-square'



                size={28}
                color='black'
                 />  

                    <Text style = {{fontSize : 35,marginLeft : 10}}>Add Resident</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style = {{marginTop : 15}}
            onPress = {() => this.props.navigation.navigate('residentlist')}>
            <View style = {{flexDirection : 'row'}}>
            <Icon
            style = {{marginTop : 5}}
            name='trello'
            size={28}
            color='black'
             />
                    <Text style = {{fontSize : 35,marginLeft : 10}}>Check Residents</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style = {{marginTop : 15}}
            onPress = {() => this.props.navigation.navigate('Entries')}>
            <View style = {{flexDirection : 'row'}}>
            <Icon
            style = {{marginTop : 5}}
            name='columns'
            size={28}
            color='black'
             />
                    <Text style = {{fontSize : 35,marginLeft : 10}}>Check Entries</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style = {{marginTop : 15}}>
            <View style = {{flexDirection : 'row'}}>
            <Icon
            style = {{marginTop : 5}}
            name='slack'
            size={28}
            color='black'
             />
                    <Text style = {{fontSize : 35,marginLeft : 10}}>Check Counts</Text>
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