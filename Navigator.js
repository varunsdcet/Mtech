import { createStackNavigator ,createAppContainer ,createDrawerNavigator} from 'react-navigation';
import Login from './Login.js';
import Signup from './Signup.js';
import Otp from './Otp.js';
import Home from './Home.js';
import Enquiry from './Enquiry.js';
import Drawer from './Drawer.js';
import Request from './Request.js';
import SendEnquiry from './SendEnquiry.js';
import Suppourt from './Suppourt.js';
import Detail from './Detail.js';
import Product from './Product.js';
import Category from './Category.js';
import Model from './Model.js';
import {NavigationActions} from 'react-navigation';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,Button} from 'react-native';

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Home
    }

},{
    initialRouteName: 'Home',
    contentComponent: Drawer,
    drawerWidth: 300
});

const StackNavigator = createStackNavigator({
   Login: { screen: Login },
   Signup: { screen: Signup },
   Otp: { screen: Otp },

     DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: '#ffffff',
    	headerStyle: {
      backgroundColor: '#e41582',
      title: 'Send Enquiry',
    },
    headerLeft: <Button onPress={() =>
     navigation.openDrawer()
 } title=" menu" />,
  }),




  },
 
 Category: { screen: Category ,
 navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: '#e41582'
    },
 
  }),
  },

Product: { screen: Product ,
 navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: '#e41582'
    },
 
  }),
  },

  Model: { screen: Model ,
 navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: '#e41582'
    },
 
  }),
  },

 Enquiry: { screen: Enquiry ,
 navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: '#e41582'
    },
 
  }),
  },

  SendEnquiry: { screen: SendEnquiry ,
 navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: '#e41582',
     headerTintColor: '#ffffff',
     tintColor: {
     color: '#ffffff'
    },
    headerTitleStyle: { color: 'black' }
    },
 
  }),
  },

  Request: { screen: Request ,
 navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: '#e41582',
     headerTintColor: 'red',
    headerTitleStyle: { color: 'black' }
    },
 
  }),
  },

  Suppourt: { screen: Suppourt ,
 navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: '#e41582',
     headerTintColor: 'red',
    headerTitleStyle: { color: 'black' }
    },
 
  }),
  },
 Detail: { screen: Detail ,
 navigationOptions: ({ navigation }) => ({
      headerStyle: {
      backgroundColor: '#e41582',
     headerTintColor: 'red',
    headerTitleStyle: { color: 'black' }
    },
 
  }),
  },

   
});

export default createAppContainer(StackNavigator);