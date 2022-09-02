/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import login from './screens/login'
 import book from './screens/book'
 import signup from './screens/signup'
 import product from './screens/product'
 import chitiet from './screens/chitiet'
 import thongbao from './screens/thongbao'
 import index from './screens/index'
 import cartshop from './screens/cartshop'
 import deleteAPI from './screens/delete'
 import insertAPI from './screens/insertScreens'
 import  {CartProvider } from './components/CartContext'
 const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();
 const App = () => {
 
   return (
     <CartProvider>
     <NavigationContainer>
     <Stack.Navigator initialRouteName="book">
             <Stack.Screen
                 name="insertAPI"
                 component={insertAPI}
             />
             <Stack.Screen
                 name="deleteAPI"
                 component={deleteAPI}
             />
              <Stack.Screen
                 name="login"
                 component={login}
             />
             <Stack.Screen
                 name="index"
                 component={index}
             />
             <Stack.Screen
                 name="signup"
                 component={signup}
             />
             <Stack.Screen
                 name="chitiet"
                 component={chitiet}
             />
             <Stack.Screen
                 name="thongbao"
                 component={thongbao}
             />
              <Stack.Screen
                 name="cartshop"
                 component={cartshop}
             />
              <Stack.Screen
                 name="book"
                 component={book}
             />
         </Stack.Navigator>
     </NavigationContainer>
     </CartProvider>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 