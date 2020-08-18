import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { 
    DrawerContentScrollView,
    DrawerItem, 
} from '@react-navigation/drawer';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';;


export default function DrawerContent(props) {
    return(
       <View>
            <View style={globalStyles.DrawerContainer}>
            <DrawerContentScrollView {...props}>
                <View style={globalStyles.DrawerHeader}>
                    <Text style={globalStyles.HeaderText}>
                        COVID-19 TRACKER
                    </Text>
                </View>
            </DrawerContentScrollView>
        </View>
        <View style={globalStyles.DrawerItemContainer}>
            <DrawerItem labelStyle={globalStyles.DrawerItem} icon={() => (<FontAwesome5 name="globe-europe" size={20} color="#616161"/>)} label="World" onPress={() => props.navigation.navigate('Home')} />
            <DrawerItem labelStyle={globalStyles.DrawerItem} icon={() => (<MaterialIcons name="info" size={20} color="#616161"/>)} label="About" onPress={() => props.navigation.navigate('About')} />
        </View>
       </View>
    )
}