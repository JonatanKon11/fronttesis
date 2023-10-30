import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, ScrollView} from "react-native";

export default function Respuesta(props) {

    const [lista, setLista]= useState([])

    //logica traer documentos

    useEffect(() => {
        const getLista = async () =>{
            try {
                const querySnapshot = await getDocs(collection(db, 'datoCuit'))
                const docs = []
                querySnapshot.array.forEach((doc) => {
                    const {cuit} = doc.data()
                    docs.push ({
                        id:doc.id,
                        cuit
                    })
                    
                })
                setLista(docs);
            }catch(error){
                console.log(error);
            }
        }
        getLista()
    },[lista])

    return (
        <ScrollView>
            <View style={styles.contenedorPadre}>
                <View style={styles.tarjeta}>
                    <View style={styles.contenedor}>
                        <Text style={styles.textoInput}>Datos Consultados</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
    contenedor:{
        padding: 5
    },
    textoInput:{
        fontSize: 40,
        textAlign: "center",
        padding: 0,
        marginTop: 0,
        borderRadius: 8,
    },
})