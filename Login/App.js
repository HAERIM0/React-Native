import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>

      <View>
        <Image style={styles.imgone} source={require('./images/mainh.png')} />
      </View>

      <View>
        <View style={styles.logn}>
          <Text style={styles.login}>로그인</Text>
        </View>

        <View style={styles.input}>
          <Text style={styles.id}>아이디</Text>
          <TextInput style={styles.inputin} placeholder="아이디를 입력해주세요"></TextInput>
        </View>

        <View style={styles.inputtwo}>
          <Text style={styles.idtwo}>비밀번호</Text>
          <TextInput style={styles.inputintwo} placeholder="비밀번호를 입력해주세요"></TextInput>
        </View>

        <View style={styles.bt} backgroundColor="#C0D725">
          <Button style={styles.btin}
            title='로그인'
            color="black">
          </Button>
        </View>

        <TouchableOpacity style={styles.mem}>
          <Text style={styles.text}>회원가입</Text>
        </TouchableOpacity>

      </View>

      <View>
        <Image style={styles.imgtwo} source={require('./images/se.png')} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imgone: {
    marginLeft: 153,
    marginTop: -15,
    width: 250,
    height: 250,
  },
  login: {
    fontSize: 26,
    marginLeft: 50,
    marginTop: 20,
    fontWeight: "600",
  },
  input: {
    alignItems: "center",
  },
  inputin: {
    width: 290,
    height: 45,
    marginTop: 5,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    fontSize: 15,
    padding: 15,
  },
  id: {
    marginLeft: -245,
    marginTop: 35,
    fontSize: 16,
  },
  inputtwo: {
    alignItems: "center",
  },
  inputintwo: {
    width: 290,
    height: 45,
    marginTop: 5,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    fontSize: 15,
    padding: 15,
  },
  idtwo: {
    marginLeft: -230,
    marginTop: 17,
    fontSize: 16,
  },
  imgtwo: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  bt: {
    marginTop: 20,
    width: 290,
    height: 50,
    marginLeft: 50,
    borderRadius: 30,
  },
  mem: {
    marginLeft: 285,
    marginTop: 12,
    fontSize: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    color: "gray",
  },
});
