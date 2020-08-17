import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import  AboutPage  from '../screens/about';

const Stack= createStackNavigator()

const goHome = (navigation) => {
    navigation.goBack();
}

export default function AboutStack({navigation}){
    return(
        <Stack.Navigator
        >
            <Stack.Screen
                name="About"
                component={AboutPage}
                options={{
                    title: 'About',
                    headerStyle: {
                        backgroundColor: '#607d8b',
                    },
                    headerLeft:()=>(
                        <MaterialIcons style={{paddingLeft:15}} name="arrow-back" size={25} color="#fff" onPress={() => goHome(navigation)}/>
                    ),
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily:'open-sans-bold',
                    },
                  }}
            />
        </Stack.Navigator>
    )
}