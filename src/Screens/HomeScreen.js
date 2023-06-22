import { View, Text, StyleSheet, Image, Button } from 'react-native';
import CustomButton from '../Components/CustomButton';
import Circle from '../Components/Circle';
import Menu from '../Components/Menu';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Circle green/>
        <Image style={styles.image} source={require('../images/pix-icon2-4159286591.png')}/>
        <Menu/>
        <View style={styles.option}>
          <Text style={styles.text}>Agilize suas vendas com o nosso App!</Text>
          <CustomButton
            style={styles.button}
            title="Gerar QRcode"
            onPress={() => navigation.navigate('Valor')}
          />
        </View>

        <Circle />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#EBEEF2",
      flex: 1, 
      alignItems: 'center',
      justifyContent: "space-evenly", 
    },
    option: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: "space-evenly",
      maxHeight: 150,
      maxWidth: 350, 
    },
    image: {
      width: 100,
      height: 100,
    },
    text: {
      color: "#393E59",
      fontSize: 22,
      fontWeight: 700,
      margin: 20,
    },
  }); 

  export default HomeScreen;