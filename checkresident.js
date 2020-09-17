import React,{Component} from 'react';
import {View,StyleSheet,FlatList,Text,TextInput,Animated} from 'react-native';
import {Card,Avatar} from 'react-native-elements';
import firebaseApp from './config';                         
import {Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';



export default class entrylist extends React.Component
{
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)

    this.itemsRef = firebaseApp.database().ref('resident');
    this.state = { description: '', residents: [], date: '', modalVisible: false};
  }

  keyExtractor = (item) => item.id;
  
  renderItem = ({item}) =>
  
  
  <View style = {{borderWidth : 0.5,borderRadius : 3,borderColor : '#b71c1c',width : 400,height : 120,marginTop : 5,alignSelf : 'center', flexDirection : 'row'}}>
    <View style = {{marginLeft : 10,marginTop : 10}}>
    <Avatar rounded icon={{ name: 'person',color : '' }} containerStyle = {{borderWidth : 1,borderColor : '#b71c1c'}}
      size="large"/> 
      <Text style={{fontSize: 15,marginLeft : 5,alignSelf : 'center',marginTop : 5,color : 'black'}}>{item.name}</Text>   
    </View>
    <View style = {{marginLeft : 15, flexDirection : 'row',marginTop : 15}}>
    <Text style={{fontSize: 30,marginLeft : 10,color : 'black',marginTop : 22}}>{item.address}</Text>
    <View style = {{flexDirection : 'column',marginLeft : 90}}>
    <Text style={{fontSize: 20,marginLeft : 5,marginTop : 15,color : 'green'}}>{item.phone}</Text>
    <Text style={{fontSize: 20,marginLeft : 5,color : 'steelblue',marginTop : 5}}>{item.vehno}</Text>
    </View>
    </View>
  </View>;

  

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
        });
      });

      this.setState({todos: items});
    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }
  


  render(){
    return(
      <View style = {styles.container}>
        
      <Text style = {{alignSelf : 'center',fontSize : 40,marginTop : 20}}>Residents</Text>

       <FlatList
            data = {this.state.residents}
            keyExtractor = {this.keyExtractor}
            renderItem = {this.renderItem}
            style={{marginTop: 20,height : '100%',width : '100%',alignSelf : 'center'}}
            onScrollEndDrag={() => console.log("end")}
            onScrollBeginDrag={() => console.log("start")}
            />
      </View>
    );
  }
}


const styles  = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
  }
})