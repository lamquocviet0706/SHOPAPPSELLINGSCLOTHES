import React, { useState} from 'react'
import {
	Button,
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	View,
	TextInput,
	Dimensions,
	TouchableOpacity,
	Pressable
} from 'react-native';
const imagebg = { uri: "https://support.aspnetzero.com/QA/files/2359_ae4d287e49b0108e5571e33132b12e7a.jpg" };
const logo = { uri: "https://image.flaticon.com/icons/png/512/561/561364.png" };
const { width: WIDTH } = Dimensions.get('window')
const thongbao = (a) => {
	const { navigation } = a
	const[error, setError] = useState('')
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
	return (
		<Pressable
			onPress={onLogout}
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
              <Image style={styles.image_iconbtn} source={require('../image/export_64px.png')}></Image>
              <Text style={styles.text}>
                {pressed ? 'Logout' : 'Logout'}
              </Text>
            </View>
          )}
        </Pressable>
	);
};

export default thongbao;


//Style
const styles = StyleSheet.create({
	wrapperCustom: {
		marginTop:'10%',
		borderRadius: 10,
		width: '40%',
		height: 60
	  },
	  container_iconbtn: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10
	  },
	  image_iconbtn: {
		width: 35,
		height: 40,
	  },
	  text:
  {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 25
  },
});