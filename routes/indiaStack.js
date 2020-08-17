import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndiaPage from '../screens/indiaPage';
import StateDetails from '../screens/stateDetails';
import { MaterialIcons } from '@expo/vector-icons';

const Stack= createStackNavigator()

const goHome = (navigation) => {
    navigation.goBack();
}

export default function IndiaStack({ navigation }){
    return(
        <Stack.Navigator
        >
        <Stack.Screen 
            name="India" 
            component={IndiaPage}
            options={{
                title: 'India Stats',
                headerTitleStyle:{
                    fontFamily:'open-sans-bold'
                },
                headerStyle: {
                    backgroundColor: '#607d8b',
                },
                headerLeft:()=>(
                    <MaterialIcons style={{paddingLeft:15}} name="arrow-back" size={25} color="#fff" onPress={() => goHome(navigation)}/>
                ),
                headerTintColor: '#fff',
              }}
            />
        <Stack.Screen 
            name="StateDetails" 
            component={StateDetails}
            options={({ route, navigation }) => ({ 
                title: route.params.name,
                headerStyle: {
                    backgroundColor: '#607d8b',
                },
                headerLeft:()=>(
                    <MaterialIcons style={{paddingLeft:15}} name="arrow-back" size={25} color="#fff" onPress={() => navigation.navigate("India")}/>
                ),
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontFamily:'open-sans-bold',
                },
                }
             )}
            />
    </Stack.Navigator>
    )
}
