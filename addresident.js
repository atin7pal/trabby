import React, { Component } from 'react';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
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
import {Card,Avatar} from 'react-native-elements';
import firebaseApp from './config';
import {Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';




export default class addresident extends Component {

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
  
    this.itemsRef = firebaseApp.database().ref('resident');
    this.state = { description: '', resident: [], date: '', modalVisible: false, name : '',phone : '',address : '',vehno : '',password : ''};
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

// signupuser = (name,phone,address,vehno,password) => {
  
//    try{
//     firebase.auth.createUserWithEmailAndPassword(name,phone,address,vehno,password)
//     alert("Hello " + name + " You have signed up as " + address)
//    }
//    catch(error){
//     alert("Something went wrong " + error);
//    }
  
//    }

  saveData = () => {
    if (this.state.name != '' && this.state.phone != ''&& this.state.address != ''&& this.state.vehno != ''&& this.state.verified != ''&& this.state.residentype ) {
      firebase.database().ref().push({ name: this.state.name, phone: this.state.phone,address : this.state.address,vehno : this.state.vehno, verified : this.state.verified,residentype : this.state.residentype});
      alert('Resident Added!')
      
    }
    else {
      alert('Something went wrong')
    }
  };


  // List todos
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({
          id: child.key,
          name: child.val().name,
          phone: child.val().phone,
          address: child.val().address,
          vehno: child.val().vehno,
          verified: child.val().verified,
          password: child.val().password,
        });
      });
      
      this.setState({resident: items});
    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {

    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })

    return (
      <View style={styles.maincontainer}>
       
           <Animatable.View animation="bounceIn" useNativeDriver = {true}  direction = "alternate" style={styles.inputcontainer}>
           <ScrollView>
         <Text style = {{fontSize : 40,color : 'black',marginTop : 30,alignSelf : 'center'}}>Add Resident</Text>
         
         <View style = {{marginTop : 50}}>
          <View style = {{...styles.inputext,flexDirection : 'row',alignSelf :  'center'}}>
         <Icon
             style = {{marginTop : 18,marginLeft : 15}}
              name='user'
              size={19}
              color='black'
               
               />
                <TextInput
                  placeholder='Enter name'
                  onChangeText={(name) => { this.setState({ name }) }}
                  style={{ marginLeft: 10,width : 200 }}
                />
              </View>
              <View style={{ ...styles.inputext, flexDirection: 'row', alignSelf: 'center' }}>
                <Icon
                  style={{ marginTop: 18, marginLeft: 15 }}
                  name='phone'
                  size={21}
                  
                  color='black'
                />
                <TextInput
                  placeholder='Enter phone number'
                  keyboardType = "numeric"
                  onChangeText={(phone) => { this.setState({ phone }) }}
                  style={{ marginLeft: 10,width : 200 }}
                />
              </View>
              <View style={{ ...styles.inputext, flexDirection: 'row', alignSelf: 'center' }}>
                <Icon
                  style={{ marginTop: 18, marginLeft: 15 }}
                  name='home'
                  size={21}
                  color='black'
                />
                <TextInput
                  placeholder='Enter address'
                  keyboardType = "email-address"
                  onChangeText={(address) => { this.setState({ address }) }}
                  style={{ marginLeft: 10,width : 200 }}
                />
              </View>
              <View style={{ ...styles.inputext, flexDirection: 'row', alignSelf: 'center' }}>
                <Icon
                  style={{ marginTop: 18, marginLeft: 15 }}
                  name='car'
                  size={18}
                  color='black'
                />
                <TextInput
                  placeholder='Enter vehicle number'
                  onChangeText={(vehno) => { this.setState({ vehno }) }}
                  style={{ marginLeft: 10,width : 200 }}
                />
              </View>
              <View style={{ ...styles.inputext, flexDirection: 'row', alignSelf: 'center' }}>
                <Icon
                  style={{ marginTop: 18, marginLeft: 15 }}
                  name='shield'
                  size={18}
                  color='black'
                />
                <TextInput
                  placeholder='Verified by?'
                  onChangeText={(verified) => { this.setState({ verified }) }}
                  style={{ marginLeft: 10,width : 200 }}
                />
              </View>

              <View style={{ ...styles.inputext, flexDirection: 'row', alignSelf: 'center' }}>
                <Icon
                  style={{ marginTop: 18, marginLeft: 15 }}
                  name='users'
                  size={20}
                  color='black'
                />
                <TextInput
                  placeholder='Resident type'
                  onChangeText={(residentype) => { this.setState({ residentype }) }}
                  style={{ marginLeft: 10,width : 200 }}
                />
              </View>

          </View>
          
          
          <Button buttonStyle = {{...styles.button,backgroundColor : '#1e1f26',marginTop : 40,alignSelf : 'center'}} onPress={this.saveData} title="Save" /> 
          
          </ScrollView>  
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
  {height: 55, width: 370, borderColor: 'black', borderWidth: 0.5, marginBottom: 7,borderRadius : 30},

  button :
  {width : 187,height : 47,borderRadius : 25}
});

AppRegistry.registerComponent('nativefirebase', () => nativefirebase);