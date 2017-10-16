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
import LoginForm from './components/LoginForm';

class App extends Component {


  componentWillMount() {

    const config = {
            apiKey: 'AIzaSyBR4FTGiOcTZ5OBNi6thE0KhCDR3PaOtQM',
            authDomain: 'manager-2328b.firebaseapp.com',
            databaseURL: 'https://manager-2328b.firebaseio.com',
            storageBucket: 'manager-2328b.appspot.com',
            messagingSenderId: '193075244299'
            };
            firebase.initializeApp(config);
        }//mount


  render(){
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />

      </Provider>
     )//return
    }

  }//class
export default App;
