import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imgone} source={require('./images/hh.png')} />
      </View>

      <View>
        <View style={styles.textone}>
          <Text style={styles.textonein}>회원가입</Text>
        </View>

        <View style={styles.ID}>
          <Text style={styles.id}>아이디</Text>
          <TextInput style={styles.inputID} placeholder="아이디를 입력해주세요"></TextInput>
        </View>

        <View style={styles.PW}>
          <Text style={styles.pw}>비밀번호</Text>
          <TextInput style={styles.inputPW} placeholder="비밀번호를 입력해주세요"></TextInput>
        </View>

        <View style={styles.NAME}>
          <Text style={styles.name}>닉네임</Text>
          <TextInput style={styles.inputNAME} placeholder="닉네임을 입력해주세요"></TextInput>
        </View>

        <View style={styles.MBTI}>
          <Text style={styles.mbti}>MBTI</Text>
          <Text style={styles.mb}>식물 추천에 사용됩니다</Text>
          <TextInput style={styles.inputMBTI} placeholder="MBTI를 입력해주세요"></TextInput>
          <Text style={styles.mbmb}>MBTI를 모르겠어요</Text>
        </View>

        <View style={styles.bt}>
          <Button title='회원가입' color="black" style={styles.btin}></Button>

        </View>

      </View>

      <View>
        <View>
          <Image style={styles.imgtwo} source={require('./images/se.png')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  imgone: {
    width: 250,
    height: 250,
    marginLeft: 153,
    marginTop: -15,
  },
  textonein: {
    fontSize: 26,
    fontWeight: "600",
    marginLeft: 22,
    marginTop: -26,
  },
  id: {
    fontSize: 16,
    marginLeft: -244,
    marginTop: 20,
  },
  ID: {
    alignItems: "center",
  },
  inputID: {
    width: 290,
    height: 45,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    marginTop: 5,
    padding: 15,
    fontSize: 15,
  },
  pw: {
    fontSize: 16,
    marginLeft: -232,
    marginTop: 17,
  },
  PW: {
    alignItems: "center",
  },
  inputPW: {
    width: 290,
    height: 45,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    marginTop: 2,
    padding: 15,
    fontSize: 15,
  },
  name: {
    fontSize: 16,
    marginLeft: -244,
    marginTop: 17,
  },
  NAME: {
    alignItems: "center",
  },
  inputNAME: {
    width: 290,
    height: 45,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    marginTop: 2,
    padding: 15,
    fontSize: 15,
  },
  mbti: {
    fontSize: 16,
    marginLeft: -244,
    marginTop: 17,
  },
  MBTI: {
    alignItems: "center",
  },
  inputMBTI: {
    width: 290,
    height: 45,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    marginTop: 2,
    padding: 15,
    fontSize: 15,
  },
  mb: {
    fontSize: 10,
    color: "#8C8C8C",
    marginTop: -14,
    marginEnd: 100,
  },
  mbmb: {
    fontSize: 10,
    color: "#8C8C8C",
    marginTop: 2,
    marginLeft: 200,
  },
  imgtwo: {
    width: 300,
    height: 300,
    marginTop: -25,
  },
  bt: {
    backgroundColor: "#C0D725",
    width: 290,
    height: 50,
    marginLeft: 50,
    borderRadius: 30,
    marginTop: 10,
  },
});
