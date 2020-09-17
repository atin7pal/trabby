import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { ScrollView } from "react-native-gesture-handler";



export default class SignUp extends Component {
  render() {
    return (
      
      <View style={styles.root}>
        
        <View style={styles.Background}>
        
          <ImageBackground
            style={styles.rect2}
            source={{uri : 'https://firebasestorage.googleapis.com/v0/b/newproj-7a868.appspot.com/o/cool-wallpaper-4k-372010.jpg?alt=media&token=7105371b-09b6-4dd3-a3cb-c04120477dd3'}}
          >
            <ScrollView>
            <View style={styles.ProgressBarColumn}>
              <View style={styles.ProgressBar}>
                <View style={styles.icon2Row}>
                  <View style = {{flexDirection : 'row',flex : 1,alignSelf : 'center'}}>
              
                  <View style={styles.icon3Stack}>
                                </View>
                </View>
              
              </View>
              </View>
              <Text style={styles.text3}>CREATE ACCOUNT</Text>
              <View style={styles.Form}>
                <View style={styles.NameColumn}>
                  <View style={styles.Name}>
                    <EvilIconsIcon name="user" style={styles.icon5} />
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.NameInput}
                    />
                  </View>
                  <View style={styles.Email}>
                    <EvilIconsIcon name="envelope" style={styles.icon6} />
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.EmailInput}
                    />
                  </View>
                </View>
                <View style={styles.NameColumnFiller} />
                <View style={styles.Password}>
                  <EvilIconsIcon name="lock" style={styles.icon7} />
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={true}
                    style={styles.PasswordInput}
                  />
                </View>
              </View>
            </View>
            <View style={styles.ProgressBarColumnFiller} />
            <View style={styles.ContinueColumn}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Main")}
                style={styles.Continue}
              >
                <Text style={styles.text2}>Continue</Text>
              </TouchableOpacity>
              <Text style={styles.text4}>Terms &amp; Conditions</Text>
            </View>
            </ScrollView>
          </ImageBackground>
        
        </View>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="maroon"
        />
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height : '100%',
    backgroundColor: "rgb(255,255,255)"
  },
  Background: {
    flex: 1,
    height : '100%'
  },
  rect2: {
    opacity: 0.83,
    flex: 1,
    height : '100%',
    width : '100%'
  },
  ProgressBar: {
    height: 40,
    flexDirection: "row",
    marginLeft: 28,
    marginRight: 28
  },
  icon2: {
    color: "rgba(30,174,199,1)",
    fontSize: 40,
    width: 33,
    height: 40
  },
  rect4: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 40,
    marginLeft: 6,
    marginTop: 16
  },
  icon3: {
    left: 0,
    position: "absolute",
    color: "#1fb2cc",
    fontSize: 35,
    top: 0,
    width: 40,
    height: 36
  },
  rect5: {
    top: 12,
    left: 40,
    width: 50,
    height: 7,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0.75,
    borderRadius: 40
  },
  icon3Stack: {
    width: 90,
    height: 36,
    marginLeft: 5,
    marginTop: 4
  },
  icon2Row: {
    height: 40,
    marginLeft : 25,
    flexDirection: "row"
  },
  icon2RowFiller: {
    flex: 0.1,
    flexDirection: "row",
    marginLeft : 155
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 34,
    height: 40,
    opacity: 0.75
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 70,
    alignSelf: "center"
  },
  Form: {
    height: 198,
    marginTop: 116
  },
  Name: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  NameInput: {
    height: 40,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 10
  },
  Email: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  EmailInput: {
    height: 40,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 10
  },
  NameColumn: {},
  NameColumnFiller: {
    flex: 1
  },
  Password: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  PasswordInput: {
    height: 40,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 10
  },
  ProgressBarColumn: {
    marginTop: 53,
    marginLeft: 41,
    marginRight: 41
  },
  ProgressBarColumnFiller: {
    flex: 1
  },
  Continue: {
    height: 55,
    backgroundColor: "#1e9437",
    opacity: 1,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    justifyContent: "center",
    marginTop : 10
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  text4: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "center",
    marginTop : 10
  },
  ContinueColumn: {
    marginBottom: 31,
    marginLeft: 41,
    marginRight: 41
  }
});
