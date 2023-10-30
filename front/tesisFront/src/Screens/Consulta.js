import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Image, Alert } from "react-native";
import { Platform } from "react-native";

export default function Consulta(props) {

    const initialState = {
        cuit:''
    }

    const [date, setDate] = useState(new Date(1598051730000));
    const [node, setNode] = useState("date");
    const [show, setShow] = useState(false);
    const [text, setText] = useState("empty");
    const [estado, setestado] = useState(initialState);

    const hamdlerChangeText = (value, name) =>{
        setestado({...estado, [name]: value})
    }

    const saveCuit = async() => {
        try{
            if(estado.cuit ---''){
                Alert.alert('DEBES INGRESAR UN NUMERO DE CUIT')
            }
            else{
                const datoCuit = {
                    cuit: estado.cuit,
                }
                props.navigation.navigate('Respuesta')
            }
        }catch(error){

        }
    }

        return (
            <ScrollView>
                <View>
                    <Image style={styles.logo}source={require('../assets/')}/>
                    <Text style={styles.subTitle}>Bienvenido a tu gestor de solvencia financiera</Text>
                        <View style={styles.contenedorPadre}>
                            <View style={styles.tarjeta}>
                                <View style={styles.contenedor}>
                                    <TextInput
                                        placeholder="ingrese el CUIT que desea buscar"
                                        style={styles.textoInput}
                                        value={estado.cuit}
                                        onChangeText={(value) => hamdlerChangeText(value, 'cuit')}
                                    />    
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.boton} onPress={saveCuit}>
                            <Text style ={styles.textoBoton}>Buscar</Text>
                        </TouchableOpacity>
                </View>        
            </ScrollView>
        )
}

const styles = StyleSheet.create({
    logo:{
        marginLeft: 120,
        marginRight: 100,
        marginTop: 80
    },
    subTitle:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        paddingStart: 20,
        marginTop: 120,
    },
    contenedorPadre:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tarjeta:{
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width: "90%",
        padding: 10,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2
    },
    boton:{
        backgroundColor: "#B71375",
        borderColor: "#FC4F00",
        borderWidth: 3,
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    textoBoton:{
        textAlign: "center",
        padding: 10,
        color: "white",
        fontSize: 20
    },
    textoInput:{
        fontSize: 20,
        textAlign: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: 8,
    },
})