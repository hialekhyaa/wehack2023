import React from "react";
import {View, TextInput, Text, StyleSheet, SafeAreaView, Image, Button, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/colors';
import { Background } from "@react-navigation/elements";

export default function Home ({navigation}) {
    return (
            <LinearGradient colors={[Colors.medPink, Colors.white, Colors.medBlue]}
            style={styles.container}>
                <SafeAreaView style={styles.screen}>
                    <View style={styles.box}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.breadLogo} source={require('../images/cuisineavengers-removebg-preview.png')}/>
                        </View>
                        <TouchableOpacity style={styles.choice} onPress={()=>{
                            navigation.navigate("Search", {searchType: "ingredients"})
                        }}>
                            <Text style={styles.tit}>Search by Ingredient</Text>
                            <Image style={styles.img} source={require('../images/berr.jpg')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.choice} onPress={()=>{
                            navigation.navigate("Search", {searchType: "cuisine"})}}>
                            <Text style={styles.tit}>Search by Cuisine</Text>
                            <Image style={styles.img} source={require('../images/sushi.jpeg')}/>
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
        //alignItems: 'center', 
        justifyContent: 'center',
        flex: 1,
        //borderWidth: 5,
        //borderColor: 'red'
    },
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',  
        justifyContent: 'center',
        //backgroundColor: "red"
        //borderWidth: 5,
        //borderColor: 'blue'
    },
    logoContainer:
    {
        //borderWidth: 5,
        //borderColor: 'blue',
        alignItems: 'center', 
    },
    img:
    {
        width: "100%",
        height: 200,
        opacity: .7,
        borderRadius: 8,
    },
    choice:
    {
        margin: 30,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 2},
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    tit:
    {
        position: 'absolute',
        zIndex: 5,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    breadLogo:
    {
        width: 200,
        height: 100,
        //borderWidth: 5,
        alignItems: "center",
        justifyContent: 'center',
    }


  });