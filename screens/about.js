import React from 'react';
import { View, Text } from 'react-native';
import { Card, Icon, Button} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';

export default function AboutPage(){
    return(
        <ScrollView>
            <View style={{marginVertical:30, marginHorizontal:5}}>
            <Card
                image={require('../assets/images/image-facemask.jpg')}
                title={
                    <Text style={{color:'#616161', fontFamily:"open-sans-regular", textAlign:'center', fontSize:20, marginVertical:20, marginHorizontal:5 }}>STAY HOME, STAY SAFE</Text>
                    }
            >
                <View style={{marginBottom:15}}>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      This app was developed by Saket S, a third year CS student from Manipal Jaipur.
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      For feedback or suggestions, you can mail him at the link below.
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      If you liked this app, don't forget to share it with your friends.
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      Remember to always wear a mask when outside and follow social distancing rules. Stay home if required.
                 </Text>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Button 
                        icon={
                            <Icon
                              name="envelope"
                              type="font-awesome-5"
                              size={25}
                              color="#616161"
                            />
                          }
                          type="clear"
                          onPress={() => Linking.openURL('mailto:saketsn.3@gmail.com')}
                        />
                        <Button 
                        icon={
                            <Icon
                              name="github"
                              type="font-awesome-5"
                              size={25}
                              color="#616161"
                            />   
                          }
                          type="clear"
                          onPress={() => Linking.openURL('https://github.com/saket2508')}
                        />
                        <Button 
                        icon={
                            <Icon
                              name="linkedin"
                              type="font-awesome-5"
                              size={25}
                              color="#616161"
                            />
                          }
                          type="clear"
                          onPress={() => Linking.openURL('https://www.linkedin.com/in/saket-s-narayan-636158149/')}
                        />
                    {/* <Icon onPress={console.log('Take me to gmail!!')} color='#616161' size={22} type="font-awesome-5" name="envelope"/>
                    <Icon color='#616161' size={22} type="font-awesome-5" name="github"/>
                    <Icon color='#616161' size={22} type="font-awesome-5" name="linkedin"/> */}
                </View>
            </Card>
        </View>
        </ScrollView>
    )
}