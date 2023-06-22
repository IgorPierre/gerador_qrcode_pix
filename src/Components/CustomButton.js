import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function CustomButton(props) {
    return (
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#01A67A",
        borderRadius: 20,
        padding: 10,
        paddingLeft: 35,
        paddingRight: 35,
        margin: 15,
        maxWidth: 250,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
  }); 

  export default CustomButton;