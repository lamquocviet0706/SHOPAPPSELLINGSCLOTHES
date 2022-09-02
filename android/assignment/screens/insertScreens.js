
import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, { useState, useEffect, useContext } from 'react';
import {
    SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme,
    View,
    ActivityIndicator,
    FlatList,
    Image, Pressable, Modal, TextInput, Button,
} from 'react-native';
import { color } from 'react-native-reanimated';
const insertAPI = props => {
    const { navigation } = props
    const [idDT,setIdDT] = useState(null)
    const [Ten,setTen] = useState(null)   
    const [gia,setGia] = useState(null)
    const [product,setProduct] = useState([])
    useEffect(() => {
        fetch('http://10.0.2.2:3000/bookapi/book/')
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
            .catch((err) => console.error(err))

    }, [])
    const onSave = () => {
        const body = {
            idDT:idDT,
            Ten: Ten,
            gia: gia,
        }
        const option = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
        fetch('http://10.0.2.2:3000/bookapi/insert', option)
            .then((res) => res.json())
            .then(async (res) => {
                if (res.result) {
                    navigation.navigate('book')
                } else {
                    console.log('them that bai ')
                }
            })
            .catch((err) => console.error('>>>>>>', err))
    }

    const onCancel = () => {
        navigation.navigate('book')
    }
    return (
        <View>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Id Điện Thoại</Text>
          <TextInput 
            value={idDT}
            onChangeText={setIdDT}
            style={styles.textinput}
          />
          <Text style={{fontSize:20,fontWeight:'bold'}}>Tên Điện Thoại</Text>
          <TextInput 
            value={Ten}
            onChangeText={setTen}
            style={styles.textinput}
          />
          <Text style={{fontSize:20,fontWeight:'bold'}}>Giá Điện Thoại</Text>
          <TextInput 
            value={gia}
            onChangeText={setGia}
            style={styles.textinput}
          />
            <Button onPress={onSave} title='Save'></Button>
            <Button onPress={onCancel} title='Cancel'></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:
    {
        backgroundColor: '#99CCFF',
        flex: 1,
    },
    image_icon: {
        marginTop: '2%',
        width: 40,
        height: 40,
        marginRight: '2%'
    },
    flatlist_item: {

        flexDirection: "row",
    },
    icon_shopping: {
        width: 35,
        height: 35,
        marginTop: 10,
        marginLeft: 10
    },
    image_iconbtn: {
        marginTop: '5%',
        width: 40,
        height: 40,
        marginLeft: '27%',
    },
    container_btn: {
        justifyContent: 'center',
        flexDirection: "row",
        marginBottom: 20
    },
    container_icon: {

        flexDirection: "row"
    },
    container_iconbtn: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    press: {
        flexDirection: "row"
    },
    image_banner: {
        marginTop: '5%',
        width: '100%',
        height: 145,
        resizeMode: 'cover'
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'cover'
    },
    wrapperCustom: {
        marginTop: 10,
        marginHorizontal: 50,
        borderRadius: 8,
        padding: 6,
        width: 100,
        height: 70
    },
    text:
    {
        textAlign: 'center',
    },
    textModal:
    {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold"
    },
    button:
    {
        borderRadius: 25,
        marginHorizontal: 25,
        backgroundColor: 'rgba(82, 174, 61, 1)',
    },
    title:
    {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "bold"
    },
    price: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "bold",
        color: 'red'
    },
    content:
    {
        marginTop: 10,
        fontSize: 15,
    },
    item: {
        backgroundColor: '#BBBBBB',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    textinput:
    {
        paddingLeft: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 1,
    },
});
export default insertAPI