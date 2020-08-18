import React, {useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import { ListItem, SearchBar, Icon} from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';


function FormatTime(item){
    let time_rn= new Date().getTime()
    let last_updated= ((time_rn-item)/60000).toFixed(0)
    return <Text style={{fontFamily:'open-sans-italic', color:'#9e9e9e', fontSize:13}}>Last Updated: {last_updated} mins ago</Text>
}


function PageContent(props){
  if(props.loading){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size="large" color="#2196f3" />
      </View>
    )
  }
  if(props.error){
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'#616161', fontSize:16}}>Unable to get data. There appears to be a problem with the server :(</Text>
      </View>
  }
  else{
    return(
      <View style={globalStyles.HomeContainer}>
      <View style= {globalStyles.Input}>
        <SearchBar
          style={globalStyles.searchBar}
          placeholder="Search Any Country..."
          inputStyle= {globalStyles.textInput}
          onChangeText={props.updateSearch}
          lightTheme={true}
          platform="default"
          value={props.search}
          containerStyle= {globalStyles.searchBarContainer}
          inputContainerStyle= {globalStyles.searchBar}
          round
        />
      </View>

      <View style={{marginBottom:15, flexDirection:'row', justifyContent:'center'}}>
        <MaterialIcons style={{marginRight:3, marginTop:1}} name="refresh" size={16} color="#9e9e9e"/>
        {FormatTime(props.lastUpdated)}
      </View>

      <FlatList
        data={props.appData.filter((item) => item.name.toLowerCase().includes(props.search.toLowerCase()))}
        keyExtractor= {(item) => item.key}
        refreshControl={
          <RefreshControl 
            colors={["#2196f3", "#2196f3"]}
            refreshing={props.refreshing} 
            onRefresh={props.onRefresh} 
            />
        }
        renderItem = {({ item }) => (
          <TouchableOpacity onPress= {() =>{
            props.navigation.navigate('Details', {
              name: item.name,
              key: item.key,
              img: item.img,
              cases: item.cases,
              newCases: item.newCases,
              newDeaths: item.newDeaths,
              deaths: item.deaths,
              tests: item.tests,
              recovered: item.recovered,
              active: item.active,
              caseFatalityRatio: item.caseFatalityRatio,
              critical: item.critical,
              casesPerMillion: item.casesPerMillion,
              deathsPerMillion: item.deathsPerMillion,
              percentageTested: item.percentageTested,
              testPositivityRatio: item.testPositivityRatio
            })
          }}>
            {checkTile(item)}
          </TouchableOpacity>
        )}
      />
    </View>
    )
  }
}


function checkTile(tile) {
  if(tile.name==="World (Total)"){
    if(tile.newCases===0){
      return(
        <View style={{marginBottom:15}}>
            <ListItem
            key={tile.key}
            leftIcon= {<Icon name="globe-europe" size={40} type="font-awesome-5" color="#757575" />}
            rightTitle= {<Text style={globalStyles.countryTitle}>{tile.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>}
            title={<Text style={globalStyles.countryTitle}>{tile["name"]}</Text>}
            bottomDivider
          />
        </View>
      )
    }
    else{
      return(
        <View style={{marginBottom:15}}>
            <ListItem
            key={tile.key}
            leftIcon= {<Icon name="globe-europe" size={40} type="font-awesome-5" color="#757575" />}
            rightTitle= {<Text style={globalStyles.countryTitle}>{tile.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>}
            rightSubtitle= {
              <View style= {{flexDirection:'row', paddingTop:1}}>
                <AntDesign style={{paddingRight:2, paddingTop:2}} size={12} name="arrowup" type="antdesign" color="#757575"/>
                <Text style={globalStyles.subtitle}>{tile.newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
              </View>
            }
            title={<Text style={globalStyles.countryTitle}>{tile["name"]}</Text>}
            bottomDivider
          />
        </View>
      )
    }
  }
  else{
    if(tile.newCases===0){
      return(
        <View style={{marginBottom:15}}>
          <ListItem
            key={tile.key}
            leftAvatar={{ source: { uri: tile.img } }}
            rightTitle= {<Text style={globalStyles.countryTitle}>{tile.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>}
            subtitle= {
              <View style={{paddingTop:1}}>
                <Text style={globalStyles.subtitle}>{"#" + tile.key}</Text>
              </View>
            }
            title={<Text style={globalStyles.countryTitle}>{tile.name}</Text>}
            bottomDivider
          />
        </View>
      )
    }
    else{
      return(
        <View style={{marginBottom:15}}>
          <ListItem
            key={tile.key}
            leftAvatar={{ source: { uri: tile.img } }}
            rightTitle= {<Text style={globalStyles.countryTitle}>{tile.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>}
            rightSubtitle= {
              <View style= {{flexDirection:'row', paddingTop:1}}>
                <AntDesign style={{paddingRight:2, paddingTop:2}} size={12} name="arrowup" type="antdesign" color="#757575"/>
                <Text style={globalStyles.subtitle}>{tile.newCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
              </View>
            }
            subtitle= {
              <View style={{paddingTop:1}}>
                <Text style={globalStyles.subtitle}>{"#" + tile.key}</Text>
              </View>
            }
            title={<Text style={globalStyles.countryTitle}>{tile.name}</Text>}
            bottomDivider
          />
        </View>
      )
    }
  }
}


export default function Home({ navigation }) {

  const [ appData, setAppData ]= useState([])
  const [ refreshing, setRefreshing ] = useState(false)
  const [ loading, setLoading] = useState(false)
  const [ search, setSearch ]= useState("")
  const [ error, setError ]= useState(false)
  const [ lastUpdated, setLastUpdated ]= useState(0)


  const updateSearch = (search) => {
    setSearch(search);
  }

  const refreshData = async() => {
    setRefreshing(true)
    try{

      const list=[]
      const obj= await fetch('https://corona.lmao.ninja/v2/countries?sort=cases');
      const rawdata= await obj.json()

      let i=1
      let world_cases= 0 
      let world_newCases= 0
      let world_deaths= 0
      let world_newDeaths= 0
      let world_recovered= 0 
      let world_active = 0
      let world_critical = 0
      let lastUpdatedTemp = rawdata[0]["updated"]

      rawdata.map((item) => {

        world_cases+= item["cases"]
        world_deaths+= item["deaths"]
        world_recovered+= item["recovered"]
        world_active+= item["active"]
        world_critical+= item["critical"]
        world_newCases+= item["todayCases"]
        world_newDeaths+= item["todayDeaths"]

        let lastUpdatedCmp= item["updated"]

        if(lastUpdatedCmp > lastUpdatedTemp){
          lastUpdatedTemp = lastUpdatedCmp
        }

        if(item['countryInfo']['iso2']!==null){
          list.push({
            name:item["country"], 
            key:(i++).toString(), 
            img:item["countryInfo"]["flag"],
            cases: item["cases"],
            deaths: item['deaths'],
            tests: item['tests'],
            critical: item["critical"],
            percentageTested: ((item["testsPerOneMillion"]/1000000)*100).toFixed(1),
            testPositivityRatio: ((item["cases"]/item["tests"])*100).toFixed(1),
            caseFatalityRatio: ((item["deaths"]/item["cases"])*100).toFixed(1),
            casesPerMillion: item["casesPerOneMillion"],
            deathsPerMillion: item["deathsPerOneMillion"],
            recovered: item['recovered'],
            active: item['active'],
            newCases: item['todayCases'],
            newDeaths: item["todayDeaths"]
        })
        }
      })

      let world_data={
        name:"World (Total)",
        key:"0",
        img:"display-icon",
        cases: world_cases,
        newCases: world_newCases,
        deaths: world_deaths,
        newDeaths: world_newDeaths,
        recovered: world_recovered,
        active: world_active,
        critical: world_critical,
        caseFatalityRatio: ((world_deaths/world_cases)*100).toFixed(1),
        casesPerMillion: (((world_cases)/7590000000)*1000000).toFixed(0),
        deathsPerMillion: (((world_deaths)/7590000000)*1000000).toFixed(0),
      }

      console.log(world_cases)
      list.push(world_data)
      list.sort((a,b) => b.cases-a.cases)
      setLastUpdated(lastUpdatedTemp)
      setAppData(list)
      setRefreshing(false)
    }
    catch(error){
      console.log(error)
      setRefreshing(false)
      setError(true)
    }
  }

  const getData = async() => {

     try{
      setLoading(true)
      const list=[]
      const obj= await fetch('https://corona.lmao.ninja/v2/countries?sort=cases');
      const rawdata= await obj.json()

      let i=1
      let world_cases= 0 
      let world_newCases= 0
      let world_deaths= 0
      let world_newDeaths= 0
      let world_recovered= 0 
      let world_active = 0
      let world_critical = 0

      let lastUpdatedTemp = rawdata[0]["updated"]

      rawdata.map((item) => {

        world_cases+= item["cases"]
        world_deaths+= item["deaths"]
        world_recovered+= item["recovered"]
        world_active+= item["active"]
        world_critical+= item["critical"]
        world_newCases+= item["todayCases"]
        world_newDeaths+= item["todayDeaths"]

        let lastUpdatedCmp= item["updated"]

        if(lastUpdatedCmp > lastUpdatedTemp){
          lastUpdatedTemp = lastUpdatedCmp
        }

        if(item['countryInfo']['iso2']!==null){
          list.push({
            name:item["country"], 
            key:(i++).toString(), 
            img:item["countryInfo"]["flag"],
            cases: item["cases"],
            deaths: item['deaths'],
            critical: item["critical"],
            percentageTested: ((item["testsPerOneMillion"]/1000000)*100).toFixed(1),
            testPositivityRatio: ((item["cases"]/item["tests"])*100).toFixed(1),
            caseFatalityRatio: ((item["deaths"]/item["cases"])*100).toFixed(1),
            casesPerMillion: item["casesPerOneMillion"],
            deathsPerMillion: item["deathsPerOneMillion"],
            tests: item['tests'],
            recovered: item['recovered'],
            active: item['active'],
            newCases: item['todayCases'],
            newDeaths: item["todayDeaths"]
        })
        }
      })

      let world_data={
        name:"World (Total)",
        key:"0",
        img:"display-icon",
        cases: world_cases,
        newCases: world_newCases,
        deaths: world_deaths,
        newDeaths: world_newDeaths,
        recovered: world_recovered,
        active: world_active,
        critical: world_critical,
        caseFatalityRatio: ((world_deaths/world_cases)*100).toFixed(1),
        casesPerMillion: (((world_cases)/7590000000)*1000000).toFixed(0),
        deathsPerMillion: (((world_deaths)/7590000000)*1000000).toFixed(0),
      }

      console.log(world_cases)
      list.push(world_data)
      list.sort((a,b) => b.cases-a.cases)
      setLastUpdated(lastUpdatedTemp)
      setAppData(list)
      setLoading(false)
     }

     catch(error){
      setLoading(false)
      setError(true)
      console.log(error)
     }
  } 

    useEffect(() => {
      getData()
    },[])


    const onRefresh = async() => {
      refreshData()
    }

  return (
    <PageContent {...{
      navigation: navigation,
      appData: appData,
      loading: loading,
      error: error,
      search: search,
      updateSearch: updateSearch,
      refreshing: refreshing,
      onRefresh: onRefresh,
      lastUpdated: lastUpdated
    }}/>
  );
}