import React, {useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import { ListItem, SearchBar, Icon, Button} from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

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
            placeholder="Search Any State/UT..."
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
  
        <FlatList
          data={props.pageData.filter((item) => item.name.toLowerCase().includes(props.search.toLowerCase()))}
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
              props.navigation.navigate('StateDetails', {
                name: item.name,
                key: item.key,
                cases: item.cases,
                newCases: item.newCases,
                newDeaths: item.newDeaths,
                deaths: item.deaths,
                recovered: item.recovered,
                active: item.active,
                caseFatalityRatio: item.caseFatalityRatio,
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
    if(tile.name==="India (Total)"){
      if(tile.newCases===0){
        return(
          <View style={{marginBottom:15}}>
              <ListItem
              key={tile.key}
              leftIcon= {<Icon name="grade" size={40} type="material" color="#757575" />}
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
              leftIcon= {<Icon name="grade" size={20} type="material" color="#757575" />}
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
              leftIcon= {<Icon name="grade" size={20} type="material" color="#757575" />}
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
              leftIcon= {<Icon name="grade" size={20} type="material" color="#757575" />}
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

export default function IndiaPage({ navigation }){

    const [ pageData, setPageData ]= useState([])
    const [ refreshing, setRefreshing ] = useState(false)
    const [ loading, setLoading] = useState(false)
    const [ search, setSearch ]= useState("")
    const [ error, setError ]= useState(false)


    const updateSearch = (search) => {
        setSearch(search);
    }


    const refreshData = async() => {
        setRefreshing(true)
        try{
            const statesList=[]
            const obj= await fetch('https://api.covid19india.org/data.json');
            const rawdataIndia= await obj.json()
            const statewiseData= rawdataIndia["statewise"]
            let i=0
            statewiseData.map((item) => {
               if(item.name!=="State Unassigned"){
                  statesList.push({
                    name:item["state"],
                    key:(i++).toString(),
                    cases: item["confirmed"],
                    active: item["active"],
                    deaths: item["deaths"],
                    recovered: item["recovered"],
                    newCases: item["deltaconfirmed"],
                    newDeaths: item["deltadeaths"],
                    caseFatalityRatio: ((item["deaths"]/item["confirmed"])*100).toFixed(1),
                })
               }
            })
            statesList[0].name= "India (Total)"
            statesList.sort((a,b) => b.cases-a.cases)
            setPageData(statesList)
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
            const statesList=[]
            const obj= await fetch('https://api.covid19india.org/data.json');
            const rawdataIndia= await obj.json()
            const statewiseData= rawdataIndia["statewise"]
            let i=0
            statewiseData.map((item) => {
                statesList.push({
                    name:item["state"],
                    key:(i++).toString(),
                    cases: item["confirmed"],
                    active: item["active"],
                    deaths: item["deaths"],
                    recovered: item["recovered"],
                    newCases: item["deltaconfirmed"],
                    newDeaths: item["deltadeaths"],
                    caseFatalityRatio: ((item["deaths"]/item["confirmed"])*100).toFixed(1),
                })
            })
            statesList[0].name= "India (Total)"
            statesList.sort((a,b) => b.cases-a.cases)
            setPageData(statesList)
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


    return(
        <PageContent {...{
            navigation: navigation,
            pageData: pageData,
            loading: loading,
            error: error,
            search: search,
            updateSearch: updateSearch,
            refreshing: refreshing,
            onRefresh: onRefresh
          }}/>
    )
}