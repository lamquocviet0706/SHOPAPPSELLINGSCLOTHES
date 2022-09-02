import React, { useState } from 'react'
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
} from 'react-native';
const imagebg = { uri: "https://support.aspnetzero.com/QA/files/2359_ae4d287e49b0108e5571e33132b12e7a.jpg" };
const logo = { uri: "https://image.flaticon.com/icons/png/512/561/561364.png" };
const { width: WIDTH } = Dimensions.get('window')
const login = (a) => {
	const { navigation } = a


	const[username, setUsername] = useState('')
	const[password, setPassword] = useState('')
	const[error, setError] = useState('')


	const onLogin = () =>{
		
			const option ={
				method: 'post',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify({username,password})
			}
				fetch('http://10.0.2.2:3000/api/login/',option)
				.then((res)=>res.json())
				.then((res)=>{
					setError('')
					if(res.status)
					{
						navigation.navigate('index')
						setUsername('')
						setPassword('')
					}
					else
					{
						Alert.alert('Sai toàn khoản mật khẩu')
					}
				})
				.catch((err)=>console.error(err))
		
	}
	return (
		<View style={styles.container}>
			<ImageBackground source={imagebg} style={styles.image}>
				<View style={styles.logocontainer}>
					<Image source={require('../image/shop.png')} style={styles.logo} />
					
				</View>
				<View style={styles.inputcontainer}>
					<TextInput style={styles.input}
						placeholder={'UserName'}
						value={username}
						onChangeText={setUsername}
						placeholderTextColor={'rgba(225,225,225,0.7)'}
						underlineColorAndroid={'transparent'}
					/>
				</View>
				<View style={styles.inputcontainer}>
					<TextInput style={styles.input}
						placeholder={'PassWord'}
						secureTextEntry={true}
						value={password}
						onChangeText={setPassword}

						placeholderTextColor={'rgba(225,225,225,0.7)'}
						underlineColorAndroid={'transparent'}
					/>
				</View>
				<TouchableOpacity style={styles.btnLogin} onPress={onLogin}>
				<View style={styles.container_iconbtn}>
					<Image style={styles.image_iconbtn} source={require('../image/enter_64px.png')}></Image>
					<Text style={styles.text}>Login</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnSignin} onPress={() => navigation.navigate('signup')}>
				<View style={styles.container_iconbtn}>
					<Image style={styles.image_iconbtn} source={require('../image/signup.png')}></Image>
					<Text style={styles.text}>Sign Up</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.container_icon}>
					<Image style={styles.image_icon} source={require('../image/facebook_48px.png')}></Image>
					<Image style={styles.image_icon} source={require('../image/instagram_48px.png')}></Image>
					<Image style={styles.image_icon} source={require('../image/twitter_squared_48px.png')}></Image>
				</View>
			</ImageBackground>
		</View>
	);
};

export default login;


//Style
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	image_iconbtn:{
		width: 40,
		height: 40,
		marginRight:'2%'
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center"
	},
	container_icon: {
		marginTop:'10%',
		flex: 1,
		flexDirection: "row",
		justifyContent: "center"
	},
	container_iconbtn: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center"
	},
	image_icon: {
		width: 70,
		height: 70,
		alignItems: 'center',
		resizeMode: "cover",
	},
	logocontainer:
	{
		alignItems: 'center',
		marginBottom: 50,
	},
	logo:
	{
		marginTop:20,
		width: 150,
		height: 150,
	},
	TextLogo:
	{
		color: 'blue',
		fontSize: 50,
		fontWeight: "bold",
		marginTop: 10,
		opacity: 0.75,// do mo cua chu
	},
	input:
	{
		width: WIDTH - 55,
		height: 45,
		borderRadius: 25,
		paddingLeft: 45,
		fontSize: 16,
		backgroundColor: '#222222',
		color: 'black',
		marginHorizontal: 25,
		opacity: 0.75
	},
	inputcontainer:
	{
		marginTop: 8
	},
	btnLogin:
	{
		width: WIDTH - 55,
		height: 45,
		borderRadius: 25,
		backgroundColor: '#CC33CC',
		justifyContent: 'center',
		marginTop: '10%',
		marginHorizontal: 25,
		opacity: 0.75
	},
	btnSignin:
	{

		width: WIDTH - 55,
		height: 45,
		borderRadius: 25,
		backgroundColor: '#CC33CC',
		justifyContent: 'center',
		marginHorizontal: 25,
		opacity: 1,
		marginTop: '5%',
	},
	text:
	{
		color: 'black',
		fontSize: 30,
		fontWeight: "bold",
		opacity: 0.5,// do mo cua chu
		textAlign: 'center',
	}
});