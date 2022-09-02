import React, { useState, useContext } from 'react'
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Alert,
  TouchableOpacity,
  Pressable, FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { acc, set } from 'react-native-reanimated';
const { width: WIDTH } = Dimensions.get('window')
import { CartContext, CartProvider } from '../components/CartContext'
const cartshop = (props) => {
  const [cart, setCart] = useContext(CartContext);
  var totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const { navigation } = props
  const buy = () => {
    if (!totalPrice) {
      Alert.alert('không có sản phẩm!!')
    }
    else {
      Alert.alert('Cảm ơn đã mua hàng!!')
      return setCart([]);
    }
  }
  return (
    <View>
    <ScrollView>
      <View>
        <View style={styles.container_iconbtn}>
          <Image style={styles.image_iconbtn} source={require('../image/average_64px.png')}></Image>
          <Text style={styles.text}>
            Số lượng: {cart.length}
          </Text>
        </View>
        <View style={styles.container_iconbtn}>
          <Image style={styles.image_iconbtn} source={require('../image/money_64px.png')}></Image>
          <Text style={styles.text}>
            Tổng tiền: {totalPrice}$
          </Text>
        </View>
        <Button onPress={buy} title="Thanh Toán"></Button>
      </View>
    </ScrollView>
     </View>
  );
};

export default cartshop;


//Style
const styles = StyleSheet.create({
  wrapperCustom: {
    marginTop: '10%',
    borderRadius: 10,
    width: '40%',
    height: 60
  },
  image_iconbtn: {
    width: 35,
    height: 35,
  },
  container_iconbtn: {
    flexDirection: "row",
  },
  text_name: {
    flexDirection: "column",
  },
  text:
  {

    fontWeight: 'bold',
    fontSize: 25
  },
  button: {
    borderRadius: 10,
    width: '40%',
  }
});