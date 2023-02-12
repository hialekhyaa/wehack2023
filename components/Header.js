import React from "react";
import {View, TextInput, Text, StyleSheet, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';


const Header = props => {
    return (
            <View onPress={() => {Keyboard.dismiss();} } style={styles.touchableParent}>
                <View style={styles.search}>
                    <TextInput placeholder='  Search' style={styles.input}></TextInput>
                    <FontAwesomeIcon icon={solid('magnifying-glass')} style={styles.searchIcon} />
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    search:
    {
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.darkPink,
        width: "80%",
        height: "130%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#d9d9d9',
        //borderColor: "red",
        //borderWidth: 1,
    },
    input:
    {
        flex:1,
        // width: '80%'
        //borderColor: "red",
        //borderWidth: 1,
        fontSize: 20
    },
    searchIcon:
    {
        // width: '80%'
        flex:1,
        //borderColor: "red",
        //borderWidth: 1,
        color: Colors.darkPink
    },
    touchableParent: {
        width: '100%',
        height: '50%',
        alignItems: 'center', 
        //borderColor: "red",
        //borderWidth: 1,
    },
  });

export default Header;