import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View ,Image} from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './Style.js';

class Drawer extends Component {




  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View>

            <View  style={styles.headertop}>

          <Image style={ styles.thumbnail } source={{ uri: 'http://appslure.website/default.png' }} />
         
         <Text style = {styles.drawerText} >
         Varun
         </Text>

          <Text style = {styles.drawerText} >
         Varun.singhal78@gmail.com
         </Text>

            </View>
             
             
            <View style={styles.menuItem}>
                 <Image style={styles.drawericon}
                             source={require('./home.png')} />
              <Text style = {styles.drawerTexts}
              onPress={this.navigateToScreen('closeDrawer')}>
                Home
              </Text>
            </View>

             <View style={styles.menuItem}>
               <Image style={styles.drawericon}
                             source={require('./enquiry.png')} />
              <Text style = {styles.drawerTexts}
              onPress={this.navigateToScreen('Enquiry')}>
                My Enquiry
              </Text>
            </View>

             <View style={styles.menuItem}>

                 <Image style={styles.drawericon}
                             source={require('./about.png')} />
             <Text style = {styles.drawerTexts}
              onPress={this.navigateToScreen('SendEnquiry')}>
                About
              </Text>
            </View>

             <View style={styles.menuItem}>
             <Image style={styles.drawericon}
                             source={require('./suppourt.png')} />

            <Text style = {styles.drawerTexts}
              onPress={this.navigateToScreen('Request')}>
                Support
              </Text>
            </View>
              
              <View style={styles.menuItem}>
                  <Image style={styles.drawericon}
                             source={require('./favourite.png')} />
             <Text style = {styles.drawerTexts}
              onPress={this.navigateToScreen('Suppourt')}>
                Favourite
              </Text>
            </View>


             <View style={styles.menuItem}>
               <Image style={styles.drawericon}
                             source={require('./logout.png')} />
              <Text style = {styles.drawerTexts}
              onPress={this.navigateToScreen('closeDrawer')}>
             
                Logout
              </Text>
            </View>
           
          
          </View>
        </ScrollView>
      </View>
    );
  }
}

Drawer.propTypes = {
  navigation: PropTypes.object
};

export default Drawer;
