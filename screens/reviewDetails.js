import React from 'react';
import { View, Text, Image, ScrollView, ActivityIndicatorComponent } from 'react-native';
import { globalStyles } from '../styles/global';
import { Tile, Card, ListItem, Button, Icon, Divider } from 'react-native-elements';

function FormatLabel(label){
  return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function PageContent(props){
  if(props.name!=="World (Total)"){
    return(
      <ScrollView>
      <View style={globalStyles.CountryDetailsContainer}>
        <View style={globalStyles.Card}>
          <Card
            image={require("../assets/images/image-1.jpg")}
            title={
            <View style={{flexDirection:'row', justifyContent:'center', flex:1, marginVertical:20, marginHorizontal:5 }}>
              <Text style={{color:'#757575', fontFamily:"open-sans-bold", textAlign:'center', fontSize:18 }}>{props.name.toUpperCase()} STATS</Text>
              <Image 
                style={globalStyles.flagImage}
                source= {{
                  uri:props.img
                }}
                />
            </View>
              }
            >
               <View>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      A cumulative total of <Text style={{fontFamily:'open-sans-bold'}}>{props.cases}</Text> cases have been reported till now in {props.name}, of which <Text style={{fontFamily:'open-sans-bold'}}>{props.active}</Text> are active and <Text style={{fontFamily:'open-sans-bold'}}>{props.recovered}</Text> cured. <Text style={{fontFamily:'open-sans-bold'}}>{props.critical}</Text> people are under critical care.{props.index}
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      <Text style={{fontFamily:'open-sans-bold'}}>{props.newCases}</Text> new cases have been confirmed today along with <Text style={{fontFamily:'open-sans-bold'}}>{props.newDeaths}</Text> fatalities. The death toll due to COVID-19 is  <Text style={{fontFamily:'open-sans-bold'}}>{props.deaths}</Text>. {props.name} has a case-fatality ratio of <Text style={{fontFamily:'open-sans-bold'}}>{props.caseFatalityRatio}%</Text>
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      The infection rate per million is <Text style={{fontFamily:'open-sans-bold'}}>{props.casesPerMillion}</Text> and death rate per million is <Text style={{fontFamily:'open-sans-bold'}}>{props.deathsPerMillion}</Text>.
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      The country has conducted a total of <Text style={{fontFamily:'open-sans-bold'}}>{props.tests}</Text> tests with a resulting test positivity ratio of <Text style={{fontFamily:'open-sans-bold'}}>{props.testPositivityRatio}%</Text>. About <Text style={{fontFamily:'open-sans-bold'}}>{props.percentageTested}%</Text> of the population has been tested.
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
            image={require("../assets/images/image-1.jpg")}
            title={
              <Text style={{color:'#757575', fontFamily:"open-sans-bold", textAlign:'center', fontSize:18, marginVertical:20, marginHorizontal:5 }}>WORLD FIGURES</Text>
              }
            >
               <View>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      A cumulative total of <Text style={{fontFamily:'open-sans-bold'}}>{props.cases}</Text> cases have been reported worldwide, with <Text style={{fontFamily:'open-sans-bold'}}>{props.active}</Text> active and <Text style={{fontFamily:'open-sans-bold'}}>{props.recovered}</Text> cured. <Text style={{fontFamily:'open-sans-bold'}}>{props.critical}</Text> people are under critical care.
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      <Text style={{fontFamily:'open-sans-bold'}}>{props.newCases}</Text> new cases have been confirmed today. New infections are growing at a weekly average of <Text style={{fontFamily:'open-sans-bold'}}>3.2%.</Text>
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      The global death toll due to COVID-19 is <Text style={{fontFamily:'open-sans-bold'}}>{props.deaths}</Text> with <Text style={{fontFamily:'open-sans-bold'}}>{props.newDeaths}</Text> fatalities today. The case-fatality ratio is <Text style={{fontFamily:'open-sans-bold'}}>{props.caseFatalityRatio}%.</Text>
                 </Text>
                 <Text style={{marginBottom:14, fontFamily:'open-sans-regular', color:'#616161', fontSize:16}}>
                      The global infection rate per million is around <Text style={{fontFamily:'open-sans-bold'}}>{props.casesPerMillion}</Text>. The death rate per million is <Text style={{fontFamily:'open-sans-bold'}}>{props.deathsPerMillion}</Text>.
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

  let index=""

  if(route.params.key==="1"){
    index= "It is currently the worst affected country."
  }
  else if(route.params.key==="2"){
    index= " It is currently the "+route.params.key+ "nd"+ " worst affected country."
  }
  else if(route.params.key==="3"){
    index= " It is currently the "+route.params.key+ "rd"+ " worst affected country."
  }
  else{
    index= " It is currently the "+route.params.key+ "th"+ " worst affected country."
  }

 if(route.params.name!=="World (Total)"){
    const name= route.params.name
    const img= route.params.img
    const cases= FormatLabel(route.params.cases)
    const active= FormatLabel(route.params.active)
    const deaths= FormatLabel(route.params.deaths)
    const recovered= FormatLabel(route.params.recovered)
    const critical= FormatLabel(route.params.critical)
    const caseFatalityRatio= route.params.caseFatalityRatio
    const percentageTested= route.params.percentageTested
    const testPositivityRatio= route.params.testPositivityRatio
    const casesPerMillion= FormatLabel(route.params.casesPerMillion)
    const deathsPerMillion= FormatLabel(route.params.deathsPerMillion)
    const newCases= FormatLabel(route.params.newCases)
    const newDeaths= FormatLabel(route.params.newDeaths)
    const tests= FormatLabel(route.params.tests)

    return (
      <PageContent {...{
       name: name,
       cases: cases,
       deaths: deaths,
       img: img,
       recovered: recovered,
       active: active,
       critical: critical,
       newCases: newCases,
       newDeaths: newDeaths,
       casesPerMillion: casesPerMillion,
       deathsPerMillion: deathsPerMillion,
       caseFatalityRatio: caseFatalityRatio,
       tests: tests,
       testPositivityRatio: testPositivityRatio,
       percentageTested: percentageTested
      }}/>
    )
 }
 else{

    const name= route.params.name
    const cases= FormatLabel(route.params.cases)
    const active= FormatLabel(route.params.active)
    const deaths= FormatLabel(route.params.deaths)
    const recovered= FormatLabel(route.params.recovered)
    const critical= FormatLabel(route.params.critical)
    const newCases= FormatLabel(route.params.newCases)
    const newDeaths= FormatLabel(route.params.newDeaths)
    const casesPerMillion= FormatLabel(route.params.casesPerMillion)
    const deathsPerMillion= FormatLabel(route.params.deathsPerMillion)
    const caseFatalityRatio= route.params.caseFatalityRatio

    return (
      <PageContent {...{
       name: name,
       cases: cases,
       deaths: deaths,
       recovered: recovered,
       active: active,
       critical: critical,
       newCases: newCases,
       newDeaths: newDeaths,
       caseFatalityRatio: caseFatalityRatio,
       casesPerMillion: casesPerMillion,
       deathsPerMillion: deathsPerMillion,
      }}/>
    )
 }
 
}