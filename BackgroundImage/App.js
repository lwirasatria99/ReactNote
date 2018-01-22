import React from 'react';
import { StyleSheet,
         Text, 
         View } from 'react-native';

import MainScreen from "./screens/mainscreen/activity_main";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
