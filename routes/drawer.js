import * as React from 'react';
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, 
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '../routes/homeStack';  
import AboutStack from '../routes/aboutStack';
import DrawerContent  from '../screens/drawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerMenu(){
    return (
        <NavigationContainer>
          <Drawer.Navigator 
            drawerContent= {props => <DrawerContent {...props}/>}
            initialRouteName="Home"
            >
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
}
