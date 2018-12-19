import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  WebView,
  Dimensions,
} from 'react-native'; 
import PropTypes from 'prop-types';
import Button from 'react-native-button';
import MaterialTabs from 'react-native-material-tabs';


const { width, height } = Dimensions.get('window');

 
 
const images = [
    "http://139.59.76.223/test_apis/image/img1.jpg",
    "http://139.59.76.223/test_apis/image/img2.jpg",
    "http://139.59.76.223/test_apis/image/img3.jpg",
    "http://139.59.76.223/test_apis/image/img4.jpg",
];
  

const equalWidth =  (width -20 ) 

 class Detail extends Component {
 
 
 static navigationOptions = {
          title: 'Detail',
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



  setTab = selectedTab => {
    alert(selectedTab)
    this.setState({ selectedTab :selectedTab})
  
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedTab :0,
      moviesList: []
    }
  }

  _keyExtractor = (item, index) => item.id;

  renderRowItem = (itemData) => {
    return (

     
      <View style={{  flexDirection: 'row',flex : 1, backgroundColor:'white',height: 150,borderRadius:20,  width : equalWidth ,margin : 10}}>

        
      <Image
          style={{ width: 100, height : 130,marginTop :10,marginLeft :10 }}
          source={{ uri: itemData.item.image }}

        

        />

     <View style={{ flex: 1, alignSelf: 'auto' }}>
          <Text style={{ fontSize: 20, margin: 6 }}>{itemData.item.date}</Text>
          <Text style={{  margin: 15 }}>{itemData.item.title}</Text>
          <Text style={{  margin: 15 }}>{itemData.item.title}</Text>
        </View>


       
      
    
   
      </View>
   
    )
  }

  componentWillMount() {
   
  }


  render() {
    return (


       <View style={styles.container}>
         <View style={{marginTop :200,height: 40}} >
          <ScrollView
        horizontal={true}
        
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
      <Button
           containerStyle={{width :130,margin :5,padding:10, height:35, overflow:'hidden', borderRadius:12, backgroundColor: '#e41582'}}
   
            style={{fontSize: 11, color: 'white'}}

        onPress={() =>  this.props.navigation.navigate('DrawerNavigator')}>
         Download Broucher
        </Button>


          <Button
           containerStyle={{width :130,margin :5,padding:10, height:35, overflow:'hidden', borderRadius:12, backgroundColor: '#e41582'}}
   
            style={{fontSize: 11, color: 'white'}}

        onPress={() =>  this.props.navigation.navigate('DrawerNavigator')}>
        Request a Quote
        </Button>

            <Button
           containerStyle={{width :130,margin :5,padding:10, height:35, overflow:'hidden', borderRadius:12, backgroundColor: '#e41582'}}
   
            style={{fontSize: 11, color: 'white'}}

        onPress={() =>  this.props.navigation.navigate('DrawerNavigator')}>
          Write a Review  
        </Button>

        
      </ScrollView>
        </View>




       <View style = {{width : window.width ,height :40 ,marginTop :20}}>
        <MaterialTabs
          items={['One', 'Two', 'Three', 'Four', 'Five']}
          selectedIndex={this.state.selectedTab}
          onChange={this.setTab}
          barColor="#e41582"
          scrollable = "true"
          indicatorColor="#fffe94"
          allowFontScaling = "true"
          activeTextColor="white"
        />
       </View>
       
        
        <WebView
       
     

        source={{ uri: images[this.state.selectedTab] }}
      
       
      />
       
      
        


       

     
      
     
       </View>
      

    );
  }


  getMoviesFromApiAsync = () => {
    return fetch('http://139.59.76.223/test_apis/api1.php')
      .then((response) => response.json())
      .then((responseJson) => {
        alert(JSON.stringify(responseJson))
        this.setState({ moviesList: responseJson.image1 }) // this will update state to re-render ui
        return responseJson.movieList;
      })
      .catch((error) => {
        console.error(error);
      });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    flexDirection: 'column'
  }
});


export default Detail;