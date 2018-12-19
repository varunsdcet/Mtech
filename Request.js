import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,Image,TouchableOpacity ,Alert,Container ,TextInput , Dimensions} from 'react-native';
import styles from './Style.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from 'react-native-button'
import { DrawerActions } from 'react-navigation';
const window = Dimensions.get('window');


type Props = {};
 class Request extends Component<Props> {


static navigationOptions = {
          title: 'Request Enquiry',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#2F95D6',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          },
      };



  
  constructor(props){
    super(props)
    const { navigation } = this.props;
    this.state = {
      username: '',
      password: '',
    }
}




  render() {
    return (
    <KeyboardAwareScrollView style={styles.container2}>
     
      <View style={{ shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 1.0,borderRadius: 4,backgroundColor : '#ffffff',margin : 20,width :window.width - 40, flex: 1, alignSelf: 'auto' }}>
          <Text style={{ fontSize: 16, margin: 6 ,color : '#000000'}}>FULL NAME</Text>
          <TextInput  style={{ fontSize: 13, margin: 6 ,color : '#000000'}} 
                                   placeholder="Enter Full Name"
                                  onChangeText={(text) => this.setState({username:text})} 
                                   />


                    <Image style={{ height :1,backgroundColor : '#c0c0c0',margin : 6 }}
           />




          <Text style={{ fontSize: 16, margin: 6 ,color : '#000000'}}>BUSSINESS NAME</Text>
          <TextInput  style={{ fontSize: 13, margin: 6 ,color : '#000000'}} 
                                   placeholder="Enter Bussiness Name"
                                  onChangeText={(text) => this.setState({username:text})} 
                                   />


                    <Image style={{ height :1,backgroundColor : '#c0c0c0',margin : 6 }}
           />


            <Text style={{ fontSize: 16, margin: 6 ,color : '#000000'}}>EMAIL</Text>
          <TextInput  style={{ fontSize: 13, margin: 6 ,color : '#000000'}} 
                                   placeholder="Enter Email"
                                  onChangeText={(text) => this.setState({username:text})} 
                                   />


                    <Image style={{ height :1,backgroundColor : '#c0c0c0',margin : 6 }}
           />

            <Text style={{ fontSize: 16, margin: 6 ,color : '#000000'}}>CITY</Text>
          <TextInput  style={{ fontSize: 13, margin: 6 ,color : '#000000'}} 
                                   placeholder="Enter City Name"
                                  onChangeText={(text) => this.setState({username:text})} 
                                   />


                    <Image style={{ height :1,backgroundColor : '#c0c0c0',margin : 6 }}
           />

            <Text style={{ fontSize: 16, margin: 6 ,color : '#000000'}}>STATE</Text>
          <TextInput  style={{ fontSize: 13, margin: 6 ,color : '#000000'}} 
                                   placeholder="Enter State Name"
                                  onChangeText={(text) => this.setState({username:text})} 
                                   />


                    <Image style={{ height :1,backgroundColor : '#c0c0c0',margin : 6 }}
           />

            <Text style={{ fontSize: 16, margin: 6 ,color : '#000000'}}>DESCRIPTION</Text>
          <TextInput  style={{ fontSize: 13, margin: 6 ,color : '#000000'}} 
                                   placeholder="Enter Description"
                                  onChangeText={(text) => this.setState({username:text})} 
                                   />


                    <Image style={{ height :1,backgroundColor : '#c0c0c0',margin : 6 }}
           />
         <Button
           containerStyle={{margin: 6,marginBottom:30,marginTop : 30,padding:10, height:40, overflow:'hidden', borderRadius:4, backgroundColor: '#e41582'}}
   
            style={{fontSize: 14, color: 'white'}}

        onPress={() =>  this.props.navigation.navigate('DrawerNavigator')}>
        SEND
        </Button>


        </View>



      
    

     </KeyboardAwareScrollView>
    );
  }
}
export default Request; 