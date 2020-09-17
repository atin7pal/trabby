import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

export default class welcomescreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.Background}>
          <ImageBackground
            style={styles.rect}
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/newproj-7a868.appspot.com/o/cool-wallpaper-4k-372010.jpg?alt=media&token=7105371b-09b6-4dd3-a3cb-c04120477dd3' }}
          >
            <ScrollView>
            <View style={styles.LogoColumn}>
              <View style={styles.Logo}>
                <View style={styles.endWrapperFiller} />
                <View style={styles.text3Column}>
                  <Image style = {{height : 140,width : 100}} source = {{uri : 'https://firebasestorage.googleapis.com/v0/b/newproj-7a868.appspot.com/o/trabby.png?alt=media&token=8cf5b024-65ad-4463-b2ba-19530dda7881'}}/>
                  <View style={styles.rect7} />
                </View>
              </View>
              <View style={styles.Form}>
                <View style={styles.UsernameColumn}>
                  <View style={styles.Username}>
                    <EvilIconsIcon name="user" style={styles.icon2} />
                    <TextInput
                      placeholder="Username"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.UsernameInput}
                    />
                  </View>
                  <View style={styles.Password}>
                    <EvilIconsIcon name="lock" style={styles.icon2} />
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.PasswordInput}
                    />
                  </View>
                </View>
                <View style={styles.UsernameColumnFiller} />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Main')}
                  style={styles.button}
                >
                  <Text style={styles.text2}>Get Started</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.LogoColumnFiller} />
            <View style={styles.FooterTexts}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignUp")}
                style={styles.button2}
              >
                <TouchableOpacity style={styles.CreateAccountFiller}
                onPress = {() => this.props.navigation.navigate('Dashboard')} />
                <TouchableOpacity>
                <Text style={styles.CreateAccount}
                onPress = {() => this.props.navigation.navigate('Dashboard')}>Create Account</Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <View style={styles.button2Filler} />
              <Text style={styles.NeedHelp}></Text>
            </View>
            </ScrollView>
          </ImageBackground>
        </View>
        <StatusBar
          animated={false}
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
    backgroundColor: "rgb(255,255,255)"
  },
  Background: {
    flex: 1
  },
  rect: {
    opacity: 0.83,
    flex: 1
  },
  Logo: {
    width: 102,
    height: 120,
    alignSelf: "center"
  },
  endWrapperFiller: {
    flex: 1
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 80,
    marginBottom: 0
  },
  rect7: {
    height: 8,
    backgroundColor: "#1e9437",
    marginRight: 0
  },
  text3Column: {
    marginBottom: 6,
    marginLeft: 2,
    marginRight: 1
  },
  Form: {
    height: 210,
    marginTop: 59
  },
  Username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  UsernameInput: {
    height: 40,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  Password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10
  },
  PasswordInput: {
    height: 40,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  UsernameColumn: {},
  UsernameColumnFiller: {
    flex: 1
  },
  button: {
    height: 59,
    backgroundColor: "#1e9437",
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  LogoColumn: {
    marginTop: 130,
    marginLeft: 41,
    marginRight: 41
  },
  LogoColumnFiller: {
    flex: 1
  },
  FooterTexts: {
    height: 14,
    flexDirection: "row",
    marginBottom: 36,
    marginLeft: 37,
    marginRight: 36
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "flex-end"
  },
  CreateAccountFiller: {
    flex: 1,
    marginTop : 20
  },
  CreateAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    marginTop : 20,
    flexDirection: "row"
  },
  NeedHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end"
  }
});
