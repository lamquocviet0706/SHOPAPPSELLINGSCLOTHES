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
} from 'react-native';
const imagebg = { uri: "https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-cartoon-fresh-flat-minimalist-shop-background-image_226292.jpg" };
const logo = { uri: "https://image.flaticon.com/icons/png/512/561/561364.png" };
const { width: WIDTH } = Dimensions.get('window')
const signup = (a) => {
	const { navigation } = a
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [password_2, setPassword_2] = useState('')
	const [error, setError] = useState('')


	const onRegister = () => {

		const option = {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password, password_2 })
		}
		fetch('http://10.0.2.2:3000/api/register/', option)
			.then((res) => res.json())
			.then((res) => {
				setError('')
				if (res.status) {
					navigation.navigate('login')
				}
				else {
					Alert.alert('sai mat khau ')
				}
			})
			.catch((err) => console.error(err))

	}
	return (
		<View style={styles.container}>
			<ImageBackground source={imagebg} style={styles.image}>
				<View style={styles.logocontainer}>
					<Image source={logo} style={styles.logo} />
					<Text style={styles.TextLogo}>QV SHOP</Text>
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
						value={password}
						onChangeText={setPassword}
						secureTextEntry={true}
						placeholderTextColor={'rgba(225,225,225,0.7)'}
						underlineColorAndroid={'transparent'}

					/>
				</View>
				<View style={styles.inputcontainer}>
					<TextInput style={styles.input}
						placeholder={'Enter Again PassWord'}
						secureTextEntry={true}
						value={password_2}
						onChangeText={setPassword_2}
						placeholderTextColor={'rgba(225,225,225,0.7)'}
						underlineColorAndroid={'transparent'}

					/>
				</View>
				<TouchableOpacity style={styles.btnLogin} onPress={onRegister}>
					<Text style={styles.text}>Login</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default signup;


//Style
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center"
	},
	logocontainer:
	{
		alignItems: 'center',
		marginBottom: 50,
	},
	logo:
	{
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
		backgroundColor: 'rgba(151, 106, 106, 0.72)',
		color: 'black',
		marginHorizontal: 25
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
		backgroundColor: 'rgba(82, 174, 61, 1)',
		justifyContent: 'center',
		marginTop: 25,
		marginHorizontal: 25
	},
	btnSignin:
	{
		width: WIDTH - 55,
		height: 45,
		borderRadius: 25,
		backgroundColor: 'rgba(82, 174, 61, 1)',
		justifyContent: 'center',
		marginTop: 10,
		marginHorizontal: 25
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