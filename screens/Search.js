import React, { useEffect, useState } from "react";
import {View, TextInput, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView, Image, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import Colors from '../constants/colors';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import Card from '../components/Card'


export default function Search (props){
    const [arrayOfCards, setArrayOfCards] = useState([]);
    useEffect(() =>{
        if(props.route.params.searchType == "cuisine"){
            console.log("cuisine was triggered")
            getCuisineTags().then((response) => {
                let tempArray = response;
                console.log(tempArray);
                let randArray = []
                let count = 0;
                for(let i = 0; i < tempArray.length; i++){
                    let random;
                    do{
                        random = Math.floor(Math.random() * tempArray.length);
                    }while(randArray.includes(random));
                    count++;
                    randArray.push(random);
                    if(count >= 5){
                        break;
                    }
                }
                console.log(randArray);
                console.log(`count is ${count}`);
                for(let i = 0; i < count; i++){
                    getInfoBasedOnTag(tempArray[randArray[i]]).then((informationObject) => {
                        setArrayOfCards(oldArray => [...oldArray, <Card navigation={props.navigation} infoGiven={true} key={randArray[i]} info={informationObject}/>]);
                    })
                }
            })
        }
        else{
            for(let i = 0; i < 5; i++){
                setArrayOfCards(oldArray => [...oldArray, <Card infoGiven={false} navigation={props.navigation} />]);
            }
        }
    }, []);
    const getCuisineTags = () => { //returns an array with all the cuisines the API has documented that are a type of cuisine
        return new Promise((resolve, reject) => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1ec7cc6bf4mshd8d4fed29ed00f3p13dccdjsn5554b2710a3b',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            };
            
            fetch('https://tasty.p.rapidapi.com/tags/list', options)
                .then(response => response.json())
                .then((response) => {
                    let tempArray = [];
                    console.log("Successfully received results for tag function");
                    response.results.forEach(element => {
                        if (element.type == "cuisine"){
                            tempArray.push(element.name);
                        }
                    });
                    resolve(tempArray);
                })
                .catch(err => reject(err))
        });
    }
    const getInfoBasedOnTag = (string) => { //returns an array of objects that contain the name of the dish and other information given a tag
        return new Promise((resolve, reject) => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1ec7cc6bf4mshd8d4fed29ed00f3p13dccdjsn5554b2710a3b',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            };
            
            fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=${string}`, options)
                .then(response => response.json())
                .then((response) => {
                    console.log("Successfully received results for info function");
                    // console.log(response.results);
                    resolve(response);
                })
                .catch(err => console.error(err));
        })
    }
        return (
        <LinearGradient colors={[Colors.medPink, Colors.white, Colors.medBlue]} style={styles.container}>
            <SafeAreaView style={styles.safeAreaView}>
                {/* <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>  */}
                    <View style={styles.screen}>
                        <View style={styles.top}>
                            <TouchableOpacity onPress={() => props.navigation.navigate("Choices")}>
                                <View style={styles.button}>
                                    <FontAwesomeIcon icon={solid('arrow-left')} style={styles.arrow} size="30x"/>
                                </View>
                            </TouchableOpacity> 
                            <Header/>
                        </View>
                        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
                            <View style = {styles.containerChild}>
                                {(() => {
                                    
                                })()}
                                {/* {console.log(arrayOfCards)} */}
                                {arrayOfCards}
                            </View>
                        </ScrollView>
                    </View>
                {/* </TouchableWithoutFeedback> */}
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    screen:
    {
        width: '100%',
        height: '100%',
        alignItems: 'center', 

        flex: 1,
        justifyContent: "flex-start"
    },
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',  
        //justifyContent: 'center',
        //backgroundColor: "red"
    },
    top:
    {
        width: '80%',
        height: '10%',
        flexDirection: 'row',
        //borderWidth: 2,
        //borderColor: 'yellow',
        alignItems: 'center'

    },
    scrollView:
    {

        flex: 1,
        alignSelf: 'center'
    },
    scrollContainer:
    {
        justifyContent: "center",
        alignItems: 'center',
        // height: "4000%",
        width: "90%",
        //flex: 1
        
    },
    containerChild: {
        height: "100%",
        width: "100%",
    },
    arrow: {
        //backgroundColor: Colors.darkBlue,
        borderRadius: 20,
        margin: 20,
        marginTop: 25,
        marginRight: 0,
        color: Colors.white
    }

  });

//export default Search;