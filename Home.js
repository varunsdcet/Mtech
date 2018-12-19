import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  Dimensions,
} from 'react-native'; 
import Carousel from 'react-native-banner-carousel';
const GLOBAL = require('./Global');
import Button from 'react-native-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const { width, height } = Dimensions.get('window');

const equalWidth =  (width / 2 ) 
const BannerWidth =  width ;
const BannerHeight = 150;
const equalHeight =  (height -190)


const images = [
    "http://139.59.76.223/test_apis/image/img1.jpg",
    "http://139.59.76.223/test_apis/image/img1.jpg",
    "http://139.59.76.223/test_apis/image/img1.jpg"
];


 class Home extends Component {
renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }

  constructor(props) {
    super(props)
    this.state = {
      moviesList: [],
      eventLists :[],
      brandLists: [],
      moviesLists: []
    }
  }

  _keyExtractor = (item, index) => item.inductry_id;
   _keyExtractors = (item, index) => item.id;
    _keyExtractorss = (item, index) => item.id;




  renderRowItem1 = (itemData) => {
    return (
              <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Detail')}>
    <View style={{ width: equalWidth + 30, height: 200, margin: 3 ,flex:1,flexDirection: 'column', borderWidth: 1.0,
    borderBottomWidth: 1,
    // borderLeftColor: '#008000',
    borderLeftWidth: 1,
    backgroundColor: 'white',
    // borderColor: '#DCDCDC',
    // borderRadius: 10,
    cornerRadius :20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopColor: '#DCDCDC',
    borderBottomColor: '#DCDCDC',
    borderLeftColor: '#DCDCDC',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    borderRightColor: '#DCDCDC'}}>
        <Image
          style={{ width: equalWidth + 30, height: 80, position: 'absolute' }}
          source={{ uri: itemData.item.image }}
        />
      
          <Text style={{ color: 'black', fontSize: 13, marginTop: 88 ,textAlign:'center' }}>Upcoming Events</Text>
          
         <View style = {{marginTop :10,flex:1,flexDirection: 'row'}}>
      
       <Image style={{ height:18,width:18}}
                             source={require('./eventd.png')} />


       


        <Text  style={{fontSize: 12, color: '#7e7e7e' ,marginLeft: 10, height:15}}

       >
        { itemData.item.date_event}
        </Text>
       </View>

        <View style = {{marginTop : -10,flex:1,flexDirection: 'row'}}>
      
       <Image style={{ marginTop :4 ,height:18,width:18}}
                             source={require('./eventl.png')} />


       


        <Text  style={{width :equalWidth - 30,fontSize: 12, color: '#7e7e7e' ,marginLeft: 10, height:50}}

       >
        { itemData.item.address}
        </Text>
       </View>

        <View style = {{marginTop : 0,flex:1,flexDirection: 'row'}}>
      
       <Image style={{ height:18,width:18}}
                             source={require('./eventa.png')} />


       


        <Text  style={{marginTop : 5,fontSize: 12, color: '#7e7e7e' ,marginLeft: 10, height:20}}

       >
         { itemData.item.hall_name}
        </Text>
       </View>
        
      </View>
      </TouchableOpacity>
    

     
    )
  }

  renderRowItem = (itemData) => {
    return (
              <TouchableOpacity  

                  onPress={() => {
           GLOBAL.industry =  itemData.item.inductry_id,
            this.props.navigation.navigate('Category', {
              itemId: itemData.item.inductry_id,
           
            });
          }}

                >
    <View style={{ width: equalWidth - 10, height: 150, flexDirection: 'row', margin: 3 }}>
        <Image
          style={{ width: equalWidth - 10, height: 150, position: 'absolute' }}
          source={{ uri: itemData.item.image }}
        />
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', alignSelf: 'auto' }}>
          <Text style={{ color: 'white', fontSize: 20, marginTop: 90 ,textAlign:'center' }}>{itemData.item.inductry_name}</Text>
          
        </View>
      </View>
      </TouchableOpacity>
    

     
    )
  }


  renderRowItem2 = (itemData) => {
    return (
               <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Detail')}>
    <View style={{ width: equalWidth - 1, height: 150, flexDirection: 'row', margin: 3,cornerRadius :12,
 
    borderTopColor: '#DCDCDC',
    borderBottomColor: '#DCDCDC',
    borderLeftColor: '#DCDCDC',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    borderRightColor: '#DCDCDC' }}>
        <Image
          style={{ width: equalWidth - 20, height: 25,borderWidth: 0, position: 'absolute' }}
          source={{ uri: itemData.item.image }}
        />
       
      </View>
      </TouchableOpacity>
    

     
    )
  }
 


  componentWillMount() {
   {this.getMoviesFromApiAsync()}
  }


  render() {
       var value =  AsyncStorage.getItem('userID');
    value.then((e)=>{
      alert(e)
    }) 
    return (
    <KeyboardAwareScrollView style={styles.containers}>
     <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {this.state.moviesList.map((image, index) => this.renderPage(image, index))}
                </Carousel>

                <View >
        <FlatList 
          data={this.state.moviesLists}
          numColumns={2}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRowItem}
        />


       <Text style = {{margin :10 ,   fontSize: 20,
    fontWeight: 'bold'}} >
          Our  Brands 
          </Text>

          <FlatList style = {{width:window.width ,height:40}}
          data={this.state.brandLists}
          showsHorizontalScrollIndicator={false}
           keyExtractor={this._keyExtractors}
          horizontal={true}
         renderItem={this.renderRowItem2}
        />


       
        <Text style = {{margin :10,   fontSize: 20,
    fontWeight: 'bold'}} >
          Our  Events 
          </Text>

          <FlatList style = {{width:window.width ,height:200}}
          data={this.state.eventLists}
            keyExtractor={this._keyExtractorss}
          horizontal={true}
         renderItem={this.renderRowItem1}
        />





          </View>
            </View>


 


     </KeyboardAwareScrollView>
       
    );
  }


  getMoviesFromApiAsync = () => {
   const url = GLOBAL.BASE_URL +  GLOBAL.front_main
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
      
        var my = [];
       {responseJson.banner1.map((message) =>  
        my.push(message.banner_image)
          
        )
      }
        alert(my)
        this.setState({ moviesLists: responseJson.industry_array1 })
        this.setState({ moviesList: my }) 
        this.setState({eventLists:responseJson.events})
        this.setState({brandLists:responseJson.brand1})
        GLOBAL.info_number =  responseJson.info_number
        GLOBAL.info_email =  responseJson.info_email
        // this will update state to re-render ui
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
export default Home;