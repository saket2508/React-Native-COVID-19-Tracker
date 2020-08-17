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
                    <Text style={{color:'#616161', fontFamily:"open-sans-bold", textAlign:'center', fontSize:18, marginVertical:20, marginHorizontal:5 }}>Stay Home, Stay Safe</Text>
                    }
            >
                <View style={{marginBottom:15}}>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:15}}>
                      This app was developed by Saket S, a third year CS student from Manipal Jaipur. For feedback or suggestions, you can mail him at the link below.
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:15}}>
                      Data used in the app has been obtained from <Text onPress={() => Linking.openURL('https://www.worldometers.info/coronavirus/')} style={{color:"#007bff"}}>worldmeters</Text> and <Text onPress={() => Linking.openURL('https://www.covid19india.org/')} style={{color:"#007bff"}}>covid19india.org</Text> through RESTFUL APIs. 
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:15}}>
                      If you liked this app, don't forget to share it with your friends.
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:15}}>
                      Remember to always wear a mask when outside and follow social distancing rules. Stay home if required.
                 </Text>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Button
                        style={{paddingHorizontal:8}} 
                        icon={
                            <Icon
                              name="envelope"
                              type="font-awesome-5"
                              size={20}
                              color="#757575"
                            />
                          }
                          type="clear"
                          onPress={() => Linking.openURL('mailto:saketsn.3@gmail.com')}
                        />
                        <Button
                        style={{paddingHorizontal:8}}  
                        icon={
                            <Icon
                              name="github"
                              type="font-awesome-5"
                              size={20}
                              color="#757575"
                            />   
                          }
                          type="clear"
                          onPress={() => Linking.openURL('https://github.com/saket2508')}
                        />
                        <Button 
                        style={{paddingHorizontal:8}} 
                        icon={
                            <Icon
                              name="linkedin"
                              type="font-awesome-5"
                              size={20}
                              color="#757575"
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