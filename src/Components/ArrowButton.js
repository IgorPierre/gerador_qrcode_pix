import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function ArrowButton(props) {
    return (
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <AntDesign name="right" size={24} color="#EBEEF2" />
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: "#01A67A",
      borderRadius: 30,
      padding: 15,
      margin: 0,
      maxWidth: 250,
      position: "absolute",
      bottom: 100,
      right: 50,
    },
  }); 

  export default ArrowButton;