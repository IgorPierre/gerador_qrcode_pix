import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import ValueScreen from './src/Screens/ValueScreen';
import QrcodeScreen from './src/Screens/QrcodeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Início" component={HomeScreen} />
          <Stack.Screen name="Valor" component={ValueScreen} />
          <Stack.Screen name="Qrcode" component={QrcodeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default Navigation;