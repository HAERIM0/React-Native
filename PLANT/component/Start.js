import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import main from '../component/images/main.png';
import se from '../component/images/se.png';
import Login from "./Login";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


export default function Start({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image style={styles.img} source={main} />
            </View>

            <View>
                <View style={styles.text}>
                    <Text style={styles.textone}>지구를 키우는 식물일기장</Text>
                </View>

                <View style={styles.text}>
                    <Text style={styles.texttwo}>MY PLANT</Text>
                    <Text style={styles.texttwo}> DIARY</Text>
                </View>
                <View style={styles.btmain}>
                    <Button title="시작하기" style={styles.bt} onPress={() => navigation.navigate('Login')} />
                </View>

            </View>
            <View>
                <Image style={styles.imgt} source={se} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    img: {
        marginLeft: 77,
        marginTop: -8,
        width: 250,
        height: 250,
    },
    text: {
        alignItems: "center",
    },
    textone: {
        fontSize: 15,
        marginTop: 70,
        marginBottom: 5,
        fontWeight: "500",
    },
    texttwo: {
        fontSize: 40,
        fontWeight: "600",
    },
    imgt: {
        marginTop: 95,
        width: 300,
        height: 300,
        marginLeft: 0,
    },
    btmain: {
        alignItems: "center",

    },
    bt: {
        fontSize: 20,
        marginTop: 18,
        color: "#2E5715",
        fontWeight: "500",
    },
});
