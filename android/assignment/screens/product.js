
import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, { useState, useEffect,useContext } from 'react';
import {
    SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme,
    View,
    ActivityIndicator,
    FlatList,
    Image, Pressable, Modal, TextInput, Button,
} from 'react-native';
import { io } from "socket.io-client";
import { color } from 'react-native-reanimated';
import SearchBar from '../components/searchbar';
const product = props => {
    const { navigation } = props
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const[error, setError] = useState('')

    useEffect(() => {
        const socket = io('http://10.0.2.2:3000')
        socket.on('serv_msg', msg => {
         
            fetch('http://10.0.2.2:3000/api/product')
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data.products)
                })
                .catch((err) => console.error(err))
            console.log(msg)
        })
    }, [])
    useEffect(() => {
        fetch('http://10.0.2.2:3000/api/product')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products)
            })
            .catch((err) => console.error(err))
    }, [])

    const onLogout = () =>{
        fetch('http://10.0.2.2:3000/api/logout')
        .then((res)=>res.json())
        .then((res)=>{
            setError('')
            if(res.status)
            {
                navigation.navigate('login')
            }
            else
            {
                setError('Sai mat khau')
            }
        })
        .catch((err)=>console.error(err))
}

    const renderItem = ({ item }) => (
        <View style={{
            backgroundColor: 'white', marginBottom: 20, padding: 10, marginVertical: 8, marginHorizontal: 20, width: '40%', borderRadius: 10,
        }}>
            <Pressable onPress={() => navigation.navigate('chitiet', { id: item._id })}>

                <Text style={styles.title}>{item.name}</Text>
                <Image style={styles.image} source={{ uri: item.avatar }}></Image>

                <View style={styles.container_icon}>
                    <Image style={styles.image_icon} source={require('../image/price.png')}></Image>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </Pressable>
        </View>
    )
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.flatlist_item}>
                    <SearchBar></SearchBar>
                    <Pressable onPress={onLogout}><Image style={styles.icon_shopping} source={require('../image/export_64px.png')}></Image></Pressable>
                </View>
                <Image style={styles.image_banner} source={require('../image/panner.jpg')}></Image>
                <View style={styles.container_btn}>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? 'rgb(210, 230, 255)'
                                    : 'white'
                            },
                            styles.wrapperCustom
                        ]}>
                        {({ pressed }) => (
                            <View style={styles.container_iconbtn}>
                                <Image style={styles.image_iconbtn} source={require('../image/t-shirt.png')}></Image>
                                <Text style={styles.text}>
                                    {pressed ? 'Áo' : 'Áo'}
                                </Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? 'rgb(210, 230, 255)'
                                    : 'white',
                            },
                            styles.wrapperCustom
                        ]}>
                        {({ pressed }) => (
                            <View style={styles.container_iconbtn}>
                                <Image style={styles.image_iconbtn} source={require('../image/jeans.png')}></Image>
                                <Text style={styles.text}>
                                    {pressed ? 'Quần' : 'Quần'}
                                </Text>
                            </View>
                        )}
                    </Pressable>
                </View>
                <FlatList numColumns={2}
                    horizontal={false}
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item._id} />
            </ScrollView>

        </>
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
        width: 20,
        height: 20,
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
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 3,
    },
});
export default product