import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import PayloadPix from '../../Payload';

function QrcodeScreen({route}) {
    let { value } = route.params;
    
    let p1 = new PayloadPix('IGOR DA SILVA PIERRE', '08191161303', `${Number(value)}`,'TIANGUA');
    let p2 = p1.gerarPayload();

    const inputString = `${p1.gerarCrc16(`${p2}`)}`;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Tudo certo!{`\n`}Agora é só escanear.
        </Text>

        <QRCode 
            value={inputString}
            size={280}
            color="#393E59"
            backgroundColor="#EBEEF2"
        />

        <View style={styles.separator}>
          <Text style={styles.text}>Valor a ser pago</Text>
          <Text style={styles.textValue}>R$ {value}</Text>
          <Text style={styles.text}>Para IGOR DA SILVA PIERRE</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#EBEEF2",
      color: "#737373",
      flex: 1, 
      alignItems: "center",
      justifyContent: 'flex-start',
      textAlign: 'center',
      padding: 10,
      paddingTop: 50,
    },
    separator: {
      flex: 1, 
      alignItems: "flex-start",
      justifyContent: 'flex-start',
      marginTop: 30,
    },
    text: {
      color: "#393E59",
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 20,
    },
    textValue: {
      color: "#01A67A",
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 10,
    },
  }); 

  export default QrcodeScreen;