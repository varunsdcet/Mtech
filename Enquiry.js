import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native'; 





const { width, height } = Dimensions.get('window');

const equalWidth =  (width -20 ) 

 class Enquiry extends Component {


  constructor(props) {
    super(props)
    this.state = {
      moviesList: []
    }
  }

  _keyExtractor = (item, index) => item.id;

  renderRowItem = (itemData) => {
    return (
      <View style={{ shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0, flexDirection: 'row',flex : 1, backgroundColor:'white',height: 150,borderRadius:20,  width : equalWidth ,margin : 10}}>

        
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
    {this.getMoviesFromApiAsync()}
  }


  render() {
    return (
      <View style={styles.container1}>
        <FlatList style= {{backgroundColor:'#f7f7f7'}}
          data={this.state.moviesList}
          numColumns={1}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRowItem}
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
export default Enquiry;