import React, { useState, useEffect,useContext } from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme,
  View,
  ActivityIndicator,
  FlatList,
  Image, Pressable, Modal, TextInput, Alert, Button
} from 'react-native';
import SearchBar from '../components/searchbar';
import cartshop from './cartshop'
import {CartContext,CartProvider} from '../components/CartContext'
const chitiet = props => {
  const { navigation, route: { params: { id } } } = props
  useEffect(()=>{
    fetch('http://10.0.2.2:3000/api/product/'+productsId)
    .then((res)=>res.json())
    .then((data)=>{
        setProducts(data)
    })
    .catch((err)=>console.error(err))
},[])

const [productsId, setProductsId] = useState(id)
const [products, setProducts] = useState([])
const [cart,setCart] = useContext(CartContext);
const addtoCart = () =>{
  const Product ={price:products.price,name:products.name,}
  setCart(curr =>[...curr,Product]);
}
  return (
    <View style={styles.container}>
      <View style={styles.flatlist_item}>
        <SearchBar></SearchBar>
        <Pressable onPress={() => navigation.navigate('cartshop')}><Image style={styles.icon_shopping} source={require('../image/shopping.png')}></Image></Pressable>
      </View>
      <ScrollView style={styles.item}>
        <Text style={styles.title}> {products.name}</Text>
        <Image style={styles.image} source={{uri:products.avatar}}></Image>
        <View style={styles.container_icon}>
          <Image style={styles.image_icon} source={require('../image/price.png')} />
          <Text style={styles.content}> {products.price}</Text>
        </View>
        <View style={styles.container_wrapperCustom}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : '#97FFFF',
            },
            styles.wrapperCustom
          ]}>
          {({ pressed }) => (
            <View style={styles.container_iconbtn}>
              <Image style={styles.image_iconbtn} source={require('../image/add.png')}></Image>
              <Text style={styles.text}>
                {pressed ? 'Mua' : 'Mua'}
              </Text>
            </View>
          )}
        </Pressable>
        <Pressable
        onPress={addtoCart}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : '#97FFFF',
            },
            styles.wrapperCustom
          ]}>
          {({ pressed }) => (
            <View style={styles.container_iconbtn}>
              <Image style={styles.image_iconbtn} source={require('../image/shopping_basket_64px.png')}></Image>
              <Text style={styles.text}>
                {pressed ? 'Thêm ' : 'Thêm '}
              </Text>
            </View>
          )}
        </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#99CCFF',
    flex: 1,
    justifyContent: 'center',
    flexDirection: "column"
  },
  image: {
    marginTop: 20,
    width: 150,
    height: 150,
    resizeMode: 'cover'
  },
  text:
  {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 25
  },
  wrapperCustom: {
    marginTop:'10%',
    borderRadius: 10,
    width: '40%',
    height: 60
  },
  container_wrapperCustom:{
    display:'flex',
    justifyContent:'space-around',
    flexDirection: "row",
  },
  container_iconbtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 2
  },
  image_iconbtn: {
    width: 35,
    height: 35,
  },
  image_icon: {
    width: 30,
    height: 30,
  },
  container_icon: {
    padding: 10,
    flexDirection: "row"
  },
  flatlist_item: {
    padding: 10,
    flexDirection: "row",
  },
  icon_shopping: {
    width: 35,
    height: 35,
    marginTop: 10,
    marginLeft: 10
  },
  item: {
    borderRadius:10,
    backgroundColor: 'white',
    padding: 30,
    marginVertical: 20,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 20,
  },
});
export default chitiet