import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily:'open-sans-bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  DrawerContainer:{
    backgroundColor:'#607d8b',
    height:175
  },
  DrawerHeader:{
    marginTop:20,
    marginBottom:30,
    paddingHorizontal:20,
 },
 HeaderText:{
    fontSize:20,
    fontFamily:'open-sans-bold',
    color:'#fff',
    marginTop:10
 },
 flagImage:{
  height:18,
  width:27,
  marginTop:5,
  marginLeft:6,
 },
 HeaderBottomText:{
    fontSize:14,
    flexDirection:'row',
    fontStyle:'italic',
    color:'#fff',
    marginTop:50,
 },
 DrawerItemContainer:{
   marginTop:20,
   paddingHorizontal:10,
   fontSize:24
 },
 DrawerItem:{
   fontSize:16,
   color:'#616161',
   fontWeight:'bold',
   paddingLeft:5
 },
 HomeContainer:{
   marginTop:15,
   marginHorizontal:5,
   flex:1
 },
 Card:{
   marginHorizontal:5,
   marginTop:30,
 },
 countryTitle:{
  fontFamily:'open-sans-bold',
  color:'#757575',
 },
 subtitle:{
   fontSize:12,
   color: '#757575',
 },
 searchBar:{
  borderRadius:50,
  backgroundColor:'#fff'
 },
 searchBarContainer:{
  shadowColor:'white',
  borderBottomColor: 'transparent',
  borderTopColor: 'transparent',
  backgroundColor:'transparent',
  borderWidth:0
 },
 textInput:{
  color:'#757575',
  fontSize:16,
  fontFamily:'open-sans-regular'
 },
 Input:{
  marginBottom:15
 },
 CountryDetailsContainer:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
 }
}); 