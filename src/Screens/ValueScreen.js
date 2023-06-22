import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ArrowButton from '../Components/ArrowButton';
import { TextInputMask } from 'react-native-masked-text';

function ValueScreen({navigation}) {
  const [number, onChangeNumber] = React.useState(0);
  const [value, onChangeValue] = React.useState('0');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite o valor da transação</Text>
      <TextInputMask
        type={'money'}
        style={styles.input}
        maxLength={18}
        onChangeText={ 
          value => {
            onChangeNumber(value.replace(/[^0-9,]/g, "").replace(/,/g, "."));
            onChangeValue(value);
            value = value.replace("R$ ", "");
            value = value.replace(".", "");
          }
        }
        value={value}
      />
      <ArrowButton
        onPress={() => navigation.navigate('Qrcode', { value: number })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBEEF2",
    flex: 1, 
    alignItems: "flex-start",
    justifyContent: 'flex-start',
    padding: 30,
    paddingTop: 50,

  },
  text: {
    color: "#393E59",
    fontSize: 22,
    fontWeight: 700,
  },
  input: {
    color: "#393E59",
    fontSize: 35,
    marginTop: 30,
  },
}); 

export default ValueScreen;