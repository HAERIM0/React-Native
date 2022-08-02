import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image style={styles.img} source={require('./images/color.png')} />
      </View>

      <View>
        <View style={styles.text}>
          <Text style={styles.textone}>지구를 키우는 식물일기장</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.texttwo}>MY PLANT</Text>
          <Text style={styles.texttwo}> DIARY</Text>
        </View>
        <TouchableOpacity style={styles.btmain}>
          <Text style={styles.bt}>시작하기</Text>
        </TouchableOpacity>

      </View>
      <View>
        <Image style={styles.imgt} source={require('./images/Plant.png')} />
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
    marginTop: 100,
    width: 300,
    height: 300,
    marginBottom: 20,
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
