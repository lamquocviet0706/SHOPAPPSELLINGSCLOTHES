
import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, { useState, useEffect,useContext } from 'react';
import {
    SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme,
    View,
    ActivityIndicator,
    FlatList,
    Image, Pressable, Modal, TextInput, Button,
} from 'react-native';
import { color } from 'react-native-reanimated';
const DienThoai = props => {
    const { navigation }  = props;
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const[error, setError] = useState('')
    useEffect(() => {
        fetch('http://10.0.2.2:3000/bookapi/book')
            .then((res) => res.json())
            .then((data) => {
                setProduct(data.sinhvien)
            })
            .catch((err) => console.error(err))
    }, [])
    const renderItem = ({ item }) => (
        <View style={{
            backgroundColor: 'white', marginBottom: 20, padding: 10, marginVertical: 8, marginHorizontal: 20, width: '40%', borderRadius: 10,
        }}>
           <Pressable>
           <Text style={styles.title}>ID Điện Thoại: {item.idDT}</Text>
                <Text style={styles.title}>Tên Điện Thoại: {item.Ten}</Text>
                <Text style={styles.title}>Giá Điện Thoai: {item.gia}</Text>     
            </Pressable>
        </View>
    )
    return (
        <>
                <Button title="Thêm mới" onPress={() => navigation.navigate('insertAPI')}></Button>
                <FlatList numColumns={2}
                    horizontal={false}
                    data={product}
                    renderItem={renderItem}
                    keyExtractor={item => item._id} />

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
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 3,
    },
});
export default DienThoai