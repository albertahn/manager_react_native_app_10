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

class App extends Component {
  render(){
    return (
      <Provider>
        <View>
          <Text>
            He
          </Text>
          </View>

      </Provider>
     )//return
    }

  }//render

}//class