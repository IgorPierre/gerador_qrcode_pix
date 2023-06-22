import React from 'react';
import { StyleSheet, View } from 'react-native';

function Circle(props) {
    return (
      <View style={props.green ? styles.green : styles.white}>
      </View>
    );
};

const styles = StyleSheet.create({
    green: {
        backgroundColor: "#01A67A",
        borderRadius: 80,
        width: 120,
        height: 120,
        position: 'absolute',
        top: -40,
        right: -40,
    },
    white: {
        backgroundColor: "#D9D9D9",
        borderRadius: 150,
        width: 300,
        height: 300,
        position: 'absolute',
        bottom: -150,
        left: -130,
    },
    
  }); 

  export default Circle;