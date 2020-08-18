import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { Card } from 'react-native-elements';

function FormatLabel(label){
    return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function PageContent(props){
    if(props.name!=="India (Total)"){
      return(
        <ScrollView>
        <View style={globalStyles.CountryDetailsContainer}>
          <View style={globalStyles.Card}>
            <Card
              image={require("../assets/images/image-3.jpg")}
              title={
              <View style={{flexDirection:'row', justifyContent:'center', flex:1, marginVertical:20, marginHorizontal:5 }}>
                <Text style={{color:'#757575', fontFamily:"open-sans-bold", textAlign:'center', fontSize:18 }}>{props.name.toUpperCase()} STATS</Text>
              </View>
                }
              >
                 <View>
                   <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                        A cumulative total of <Text style={{fontFamily:'open-sans-bold'}}>{props.cases}</Text> cases have been reported till now in {props.name}, of which <Text style={{fontFamily:'open-sans-bold'}}>{props.active}</Text> are active and <Text style={{fontFamily:'open-sans-bold'}}>{props.recovered}</Text> cured.
                   </Text>
                   <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                        <Text style={{fontFamily:'open-sans-bold'}}>{props.newCases}</Text> new cases have been confirmed today along with <Text style={{fontFamily:'open-sans-bold'}}>{props.newDeaths}</Text> fatalities. The death toll due to COVID-19 is <Text style={{fontFamily:'open-sans-bold'}}>{props.deaths}</Text>. {props.name} has a case-fatality ratio of <Text style={{fontFamily:'open-sans-bold'}}>{props.caseFatalityRatio}%</Text>
                   </Text>
                  </View>
              </Card>
          </View>
        </View>
      </ScrollView>
      )
    }
    else{
      return(
        <ScrollView>
        <View style={globalStyles.CountryDetailsContainer}>
          <View style={globalStyles.Card}>
            <Card
            //change the image
              image={require("../assets/images/image-3.jpg")}
              title={
                <Text style={{color:'#757575', fontFamily:"open-sans-bold", textAlign:'center', fontSize:18, marginVertical:20, marginHorizontal:5 }}>INDIA FIGURES</Text>
                }
              >
                 <View>
                   <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                        A cumulative total of <Text style={{fontFamily:'open-sans-bold'}}>{props.cases}</Text> cases have been reported nationwide, with <Text style={{fontFamily:'open-sans-bold'}}>{props.active}</Text> active and <Text style={{fontFamily:'open-sans-bold'}}>{props.recovered}</Text> cured.
                   </Text>
                   <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                        <Text style={{fontFamily:'open-sans-bold'}}>{props.newCases}</Text> new cases have been confirmed today. New infections are growing at a weekly average of <Text style={{fontFamily:'open-sans-bold'}}>3.2%.</Text>
                   </Text>
                   <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                        The death toll due to COVID-19 is <Text style={{fontFamily:'open-sans-bold'}}>{props.deaths}</Text> with <Text style={{fontFamily:'open-sans-bold'}}>{props.newDeaths}</Text> fatalities today. The case-fatality ratio is <Text style={{fontFamily:'open-sans-bold'}}>{props.caseFatalityRatio}%.</Text>
                   </Text>
                  </View>
              </Card>
          </View>
        </View>
      </ScrollView>
      )
    }
  }

  
export default function ReviewDetails({ route, navigation }) {

    const name= route.params.name
    const cases= FormatLabel(route.params.cases)
    const active= FormatLabel(route.params.active)
    const deaths= FormatLabel(route.params.deaths)
    const recovered= FormatLabel(route.params.recovered)
    const newCases= FormatLabel(route.params.newCases)
    const newDeaths= FormatLabel(route.params.newDeaths)
    const caseFatalityRatio= route.params.caseFatalityRatio

    return (
        <PageContent {...{
         name: name,
         cases: cases,
         deaths: deaths,
         recovered: recovered,
         active: active,
         newCases: newCases,
         newDeaths: newDeaths,
         caseFatalityRatio: caseFatalityRatio,
        }}/>
      )  
}
  
  