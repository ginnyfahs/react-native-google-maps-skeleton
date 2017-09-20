/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { GOOGLE_MAPS_API_KEY } from 'react-native-dotenv'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class map_prac_2 extends Component {
  render() {
    return (
      <MapView
        provider={ PROVIDER_GOOGLE }
        style = { styles.container }
        initialRegion={{
          latitude: 39.7392,
          longitude: -104.9903,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
   height: '100%',
   width: '100%',
  }
});

AppRegistry.registerComponent('map_prac_2', () => map_prac_2);
