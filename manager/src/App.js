/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {


  componentWillMount() {
    
    const config = {
              apiKey: "AIzaSyD5LprzQTVdAj0P7FYCx2ek0xuMJC7x7IQ",
              authDomain: "project-2382567055602623632.firebaseapp.com",
              databaseURL: "https://project-2382567055602623632.firebaseio.com",
              projectId: "project-2382567055602623632",
              storageBucket: "project-2382567055602623632.appspot.com",
              messagingSenderId: "265869443051"
            };
            firebase.initializeApp(config);
        }//mount


  render(){
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            He
          </Text>
          </View>

      </Provider>
     )//return
    }

  }//class
export default App;