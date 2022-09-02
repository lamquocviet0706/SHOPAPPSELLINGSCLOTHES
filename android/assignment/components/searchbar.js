import React, { } from 'react'
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

const SearchBar = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../image/search.png')}></Image>
            <TextInput  style={styles.searchInput} placeholder='Tìm Kiếm Sản Phẩm...'></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'80%',
        height:40,
        backgroundColor:'white',
        borderRadius: 8,
        marginTop:10,
        marginLeft:10,
        flexDirection:'row'
    },
    searchInput:{
        width:'100%',
        height:'100%',
       
        fontSize:16,
    },
    image:{
        width:20,
        height:20,
        marginTop:10,
        marginLeft:10
    }
})

export default SearchBar;
