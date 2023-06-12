import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Ecommerce from '../screens/Ecommerce';
import ProductDetails from '../screens/ProductDetails';
import Dashboard from '../screens/Dashboard';
import TextEditor from '../screens/TextEditor';
import Calculator from '../screens/Calculator';


const MainStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Ecommerce" component={Ecommerce} />
                <Stack.Screen name="TextEditor" component={TextEditor} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
                <Stack.Screen name="Calculator" component={Calculator} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

