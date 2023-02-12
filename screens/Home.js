import React from "react";
import {View, TextInput, Text, StyleSheet, SafeAreaView, Image, Button, Pressable, Touchable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/colors';
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Home ({navigation}) {
    return (
            <LinearGradient colors={[Colors.medPink, Colors.white, Colors.medBlue]}
            style={styles.container}>
                <SafeAreaView style={styles.screen}>
                    <View style={styles.breadContainer}>
                        <Image style={styles.breadLogo} source={require('../images/cuisineavengers-removebg-preview.png')}/>
                        <TouchableOpacity onPress={() => navigation.navigate("Choices")}>
                            <View style={styles.button}>
                                <Text style={styles.slogan}>Bring the Travel to You!</Text> 
                                <FontAwesomeIcon icon={solid('arrow-right')} style={styles.arrow} size="25x"/>
                            </View>
                        </TouchableOpacity> 
                    </View>
                </SafeAreaView>
            </LinearGradient>
    );
};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',  
        justifyContent: 'center',
        //backgroundColor: "red"
    },
    breadContainer:
    {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        display: 'flex',
        height: '90%',
        //borderWidth: 2,
        //borderColor: 'yellow',

    },
    breadLogo:
    {
        //resizeMode: "contain",
        width: '100%',
        height: '26%',
        //borderWidth: 2,
        //borderColor: 'blue',
        //marginBottom: 50
    },
    slogan:
    {
        //borderWidth: 2,
        //borderColor: 'blue',
        
        color: Colors.white,
        fontWeight: 'bold',
        //borderWidth: 2,
        //borderColor: 'blue',
        marginTop: 15,
        marginLeft: 18,
        fontSize: '25%',

    },
    button:
    {
        backgroundColor: Colors.darkBlue,
        flexDirection: 'row',
        aligntItems: 'center',
        justifyContent: 'center',
        //borderWidth: 2,
        //borderColor: 'blue',
        borderRadius: 30

    },
    arrow:
    {
        //borderWidth: 2,
        //borderColor: 'blue',
        margin: 18,
        color: 'white'
        
    }
  });

