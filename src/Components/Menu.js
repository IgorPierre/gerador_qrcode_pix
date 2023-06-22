import React, {useState} from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Menu() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonOpen}>
                <Feather name="menu" size={35}  color="#EBEEF2" />
            </TouchableOpacity>
            <Modal
                animationType="fade" 
                visible={modalVisible} 
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.container}>
                    <Text style={styles.text}>Editar chave pix</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.buttonClose}>
                        <Ionicons name="ios-close" size={40} color="#393E59"/>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 200,
    },
    text: {
        fontSize: 20,
        fontWeight: 700,
        color: "#393E59", 
    }, 
    buttonOpen: {
        position: "absolute",
        top: 15,
        right: 15,
    },
    buttonClose: {
        position: "absolute",
        bottom: 100,
    },
    
  }); 

  export default Menu;