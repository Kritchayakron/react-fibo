/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useState,useEffect} from 'react';
import {ScrollView,SafeAreaView, StatusBar} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import FiboList from './components/fiboList';
import store from './store';
import { StyleSheet, Text, View, Button } from "react-native";
import {useDispatch, useSelector} from 'react-redux';


function App(): JSX.Element {

  return (
    <>
     
     <ReduxProvider store={store}>
          <FiboList></FiboList>
      </ReduxProvider>
    </>
  );
};


export default App;