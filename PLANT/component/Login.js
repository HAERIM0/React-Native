import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import main from '../component/images/main.png';
import se from '../component/images/se.png';

export default function App() {
    const onChangeId = (event) => setId(event);
    const onChangePw = (event) => setPw(event);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const login = () => {
        if (id === "") {
            alert("아이디를 입력해 주세요");
        } else if (pw === "") {
            alert("비밀번호를 입력해 주세요");
        } else {
            alert("로그인 성공"); //임시
        }
    };

    return (
        <View style={styles.container}>

            <View>
                <Image style={styles.imgone} source={main} />
            </View>

            <View>
                <View style={styles.logn}>
                    <Text style={styles.login}>로그인</Text>
                </View>

                <View style={styles.input}>
                    <Text style={styles.id}>아이디</Text>
                    <TextInput
                        onSubmitEditing={login}
                        onChangeText={onChangeId}
                        value={id}
                        style={styles.inputin}
                        placeholder="아이디를 입력해주세요" >

                    </TextInput>
                </View>

                <View style={styles.inputtwo}>
                    <Text value={pw} style={styles.idtwo}>비밀번호</Text>
                    <TextInput style={styles.inputintwo} placeholder="비밀번호를 입력해주세요" secureTextEntry onChangeText={onChangePw}></TextInput>
                </View>

                <View style={styles.bt} backgroundColor="#C0D725">
                    <Button style={styles.btin} onPress={() => login()}
                        title='로그인'
                        color="black">
                    </Button>
                </View>

                <TouchableOpacity style={styles.mem}>
                    <Text style={styles.text}>회원가입</Text>
                </TouchableOpacity>

            </View>

            <View>
                <Image style={styles.imgtwo} source={se} />
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
        marginLeft: 165,
        marginTop: -15,
        width: 250,
        height: 250,
    },
    login: {
        fontSize: 26,
        marginLeft: 62,
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