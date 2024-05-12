import React, {Component, useState} from "react";
import {View} from "react-native";
import MapView from 'react-native-maps';


class HelloWorld extends Component{
  
  render() {
    return (// initialRegion={{ latitude: 37.78825, longitude: -122.4324,      latitudeDelta: 0.0922,      longitudeDelta: 0.0421 }}
      <View style={{flex: 1}}>
        <MapView style={{flex: 1}} />
      </View>
    );
      
  }
}

export default HelloWorld;