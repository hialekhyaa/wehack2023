import React from "react";
import {View, TextInput, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView, Image, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import Colors from '../constants/colors';
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import Card from '../components/Card'


export default function Recipe (props){
    return (
        <LinearGradient colors={[Colors.medPink, Colors.white, Colors.medBlue]} style={styles.container}>
            <SafeAreaView style={styles.safeAreaView}>
                {/* <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>  */}
                    <View style={styles.screen}>
                        <View style={styles.top}>
                            <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
                                    <FontAwesomeIcon icon={solid('arrow-left')} style={styles.arrow} size = '30x'/>
                            </TouchableOpacity> 
                            <Text style={styles.title}>How to Make:</Text>
                            {/* props.route.params.name */}
                        </View>
                        <View style={styles.imageBox}>
                          <Image style={styles.breadLogo} source={require('../images/ChickenBiryani.jpg')}/>
                        </View>
                        <View>
                          <Text style={styles.recipeNameTitle}>Sample Recipe Title</Text>
                        </View>
                        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
                            <View style = {styles.containerChild}>
                             <Text style={styles.recipeText}>
                              1 serving 

                              Ingredients 
                              3 large eggs
                              1.5 tbsp finely chopped scallion
                              1.5 tbsp finely chopped carrot 
                              1/8 tsp salt 
                              1/8 tsp black pepper
                              1 tsp vegetable oil


                              Instructions
                              Beat the eggs until the white and the yolk have mixed well
                              Add in the vegetables into the eggs and mix
                              Add a teaspoon of vegetable oil to your pan and use a napkin/cloth to evenly distribute the oil and preheat over medium low heat, 
                              check if it is hot 
                              enough by placing your hand 2 to 3 inches above and if you can feel the heat, 
                              it is ready
                              Add half of the mixture into the pan and swirl it around and cook until the top begins to set but is still wet
                              Use a spatula to lift one end and fold it inwards about 1-1/2 inches and reduce the heat 
                              Lift the folded part and fold it again and pull the folded part to make room for the rest of the egg mixture that you will pour in 
                              When the egg is set, repeat the folding process
                              Remove from the pan, let it cool for 5 minutes, and slice the egg into, even pieces (3/4 to 1-inch thick)

                              </Text>
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
      
    },
    top:
    {
        width: '80%',
        height: '10%',
        flexDirection: 'row',
        //borderWidth: 2,
        //borderColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-around'

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
        width: "80%",
        //flex: 1
        
    },
    containerChild: {
        height: "100%",
        width: "100%",
    },
    arrow: {
        //backgroundColor: Colors.darkBlue,
        color: Colors.white,
        //borderWidth: 2,
        //borderColor: 'green',
        
    },
    header:
    {
      flexDirection: 'row',
      //borderWidth: 2,
      //borderColor: 'yellow',
      alignItems: 'center',
      margin: 20,
      
    },
    title:
    {
      //borderWidth: 2,
      //borderColor: 'red',
      flex: 1,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: Colors.darkPink,
      margin: 20,
      color: 'white'
    },
    recipeNameTitle:
    {
      margin: 30,
      fontSize: 36,
      color: Colors.darkPink,
      fontWeight: 'bold'

    },
    recipeText:
    {
      fontSize: 18
    },
    breadLogo:
    {
        width: 350,
        height: 200,
    },
    imageBox:
    {
        shadowColor: Colors.darkBlue,
        shadowOffset: { width: 3, height: 2},
        shadowRadius: 10,
        shadowOpacity: .7,
    }

  });