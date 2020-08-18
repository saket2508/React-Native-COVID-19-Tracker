import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import { MaterialIcons } from '@expo/vector-icons';


const Stack= createStackNavigator()


const openMenu = (navigation) => {
    navigation.openDrawer({text: "Last Updated: 6 mins ago"});
}

export default function HomeStack({ navigation }){
    return(
            <Stack.Navigator
                >
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        title: 'World Stats',
                        headerTitleStyle:{
                            fontFamily:'open-sans-bold'
                        },
                        headerStyle: {
                            backgroundColor: '#343a40',
                        },
                        headerLeft:()=>(
                            <MaterialIcons style={{paddingLeft:15}} name="menu" size={25} color="#fff" onPress={() => openMenu(navigation)}/>
                        ),
                        headerTintColor: '#fff',
                      }}
                    />
                <Stack.Screen 
                    name="Details" 
                    component={ReviewDetails}
                    options={({ route }) => ({ 
                        title: route.params.name,
                        headerStyle: {
                            backgroundColor: '#343a40',
                        },
                        headerLeft:()=>(
                            <MaterialIcons style={{paddingLeft:15}} name="arrow-back" size={25} color="#fff" onPress={() => navigation.goBack()}/>
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