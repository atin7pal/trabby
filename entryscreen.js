import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Animated,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Modal,
  View,
  Alert
} from 'react-native';
import {Card,Avatar,Input} from 'react-native-elements';
import firebaseApp from './config';
import {Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';




export default class entryscreen extends Component {

  componentDidMount () {
    this.animate()
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }
  
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
  
    this.itemsRef = firebaseApp.database().ref('todos');
    this.state = { description: '', todos: [], date: '', modalVisible: false};
  }

  keyExtractor = (item) => item.id;

  renderItem = ({item}) =>
  
  
  <View style = {{borderWidth : 0.5,width : 400,height : 120,marginTop : 5,alignSelf : 'center', flexDirection : 'row'}}>
    <View style = {{marginLeft : 10,marginTop : 10}}>
    <Avatar rounded icon={{ name: 'person' }}
      size="large"/> 
      <Text style={{fontSize: 15,marginLeft : 5,alignSelf : 'center',marginTop : 5}}>{item.name}</Text>   
    </View>
    <View style = {{marginLeft : 15}}>
    
    <Text style={{fontSize: 20,marginLeft : 5,marginTop : 15}}>{item.phone}</Text>
    <Text style={{fontSize: 20,marginLeft : 5}}>{item.address}</Text>
    <Text style={{fontSize: 20,marginLeft : 5}}>{item.vehno}</Text>
    </View>
  </View>;

  saveData = () => {
    
     firebaseApp.database
      
  };

  saveData = () => {
    if (this.state.name != '' && this.state.phone != ''&& this.state.address != ''&& this.state.vehno != ''&& this.state.from != '') {
      this.itemsRef.push({ name: this.state.name, phone: this.state.phone,address : this.state.address,vehno : this.state.vehno,from : this.state.from});
      
      this.setState({name: '', modalVisible: false});
    }
    else {
      
    }
  };

  // List todos
 
  componentDidMount() {
    
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
  

    that.setState({
      //Setting the value of the date time
      date:
        date + '-' + month + '-' + year + ' ' + hours + ':' + min
    });

  }

  render() {

    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })

    return (
      <View style={styles.maincontainer}>
       
           <Animatable.View animation="bounceIn" useNativeDriver = {true}  direction = "alternate" style={styles.inputcontainer}>


         <Text style = {{fontSize : 40,color : 'black',marginTop : 30}}>New Entry</Text>
         <ScrollView>
         <View style = {{marginTop : 70}}>
         <View style = {{...styles.inputext,flexDirection : 'row',alignSelf :  'center'}}>
         <Icon
             style = {{marginTop : 18,marginLeft : 15}}
              name='user'
              size={20}
              color='black'
               />
         <TextInput
              placeholder='  Enter name'
              onChangeText={(name) => this.setState({name})}
              style = {{marginLeft : 5}}
              />
              </View>
              <View style = {{...styles.inputext,flexDirection : 'row',alignSelf :  'center'}}>
           <Icon
                  style = {{marginTop : 18,marginLeft : 15}}
                   name='home'
                   size={22}
                   color='black'
                  />
          <TextInput
                   placeholder='  Enter flat'
                   onChangeText={(address) => this.setState({address})}
                   style = {{marginLeft : 5}}
                   />
            </View>

            <View style = {{...styles.inputext,flexDirection : 'row',alignSelf : 'center' }}>
             <Icon
                       style = {{marginTop : 18,marginLeft : 15}}
                        name='phone'
                        size={22}
                        color='black'
                         />
            <TextInput
                        placeholder='  Enter phone'
                        onChangeText={(phone) => this.setState({phone})}
                        style = {{marginLeft : 5}}
                        keyboardType = 'numeric'
                        />
                </View>

                        <View style = {{...styles.inputext,flexDirection : 'row',alignSelf :  'center'}}>
                        <Icon
                            style = {{marginTop : 18,marginLeft : 15}}
                             name='building'
                             size={19}
                             color='black'
                              />
                        <TextInput
                             placeholder='  Enter address'
                             onChangeText={(from) => this.setState({from})}
                             style = {{marginLeft : 5}}
                             />
                             </View>

                             <View style = {{...styles.inputext,flexDirection : 'row',alignSelf :  'center'}}>
                             <Icon
                                 style = {{marginTop : 18,marginLeft : 15}}
                                  name='car'
                                  size={19}
                                  color='black'
                                   />
                             <TextInput
                                  placeholder='  Enter vehicle no'
                                  onChangeText={(vehno) => this.setState({vehno})}
                                  style = {{marginLeft : 5}}
                                  />
                                  </View>

              
              <Text
            
              style={{
                fontSize: 0,
                alignSelf : 'center',
                marginTop: 16,
                
              }}>
              {this.state.date}
            </Text>
          </View>
          </ScrollView>
          
          <Button buttonStyle = {{...styles.button,backgroundColor : '#1e1f26'}} onPress={this.saveData} title="Save" /> 
          
          
        </Animatable.View>
                              
        
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headercontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },  
  inputcontainer: {
    flex: 1,
    alignItems : 'center',
    backgroundColor: 'white',
  },
  listcontainer: {
    flex: 10,
    marginTop : 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputext :
  {height: 55, width: 370, borderColor: 'black', borderWidth: 0.7, marginBottom: 7,borderRadius : 30},

  button :
  {width : 187,height : 47,borderRadius : 25}
});

AppRegistry.registerComponent('nativefirebase', () => nativefirebase);