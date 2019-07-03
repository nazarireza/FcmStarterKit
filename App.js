/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import firebase from 'react-native-firebase';

export default class App extends Component {
  componentDidMount() {
    // (async () => {
    //   const fcmToken = await firebase.messaging().getToken();

    //   const enabled = await firebase.messaging().hasPermission();
    //   if (!enabled) {
    //     try {
    //       await firebase.messaging().requestPermission();
    //     } catch (error) {
    //       console.warn(error);
    //     }
    //   }
    //   else{
    //     console.warn('Enable');
    //   }
    // })();

    this.removeNotificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed((notification) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      });
    this.removeNotificationListener = firebase
      .notifications()
      .onNotification((notification) => {
        // Process your notification as required
      });
  }

  componentWillUnmount() {
    this.removeNotificationDisplayedListener();
    this.removeNotificationListener();
}

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
