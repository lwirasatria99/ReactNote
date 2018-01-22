import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class ActivityMain extends Component {
    render() {
        return (
            
            // Background
            <Image 
              source={require('./bg_angkasa_full.jpg')} 
              style={styles.backgroundImage} />

        );

    }
}


let styles = StyleSheet.create({

    backgroundImage: {
        flex : 1,
        resizeMode : 'cover'
    }

})
