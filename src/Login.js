import { View, Text,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {firebase} from '../config'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
  const navigation=useNavigation()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  loginUser=async(email,password)=>{
    try{await firebase.auth().signInWithEmailAndPassword(email,password);}
    catch(error){
      alert(error.messege)
  }

  }

  return (
    <View style={styles.container}>
    <Text style={{fontWeight:'bold',fontSize:26}}>Login</Text>
    <View style={{marginTop:40}}>
      <TextInput style={styles.TextInput}
      placeholder="Email"
      onChangeText={(email)=>setEmail(email) }
      autoCapitalize="none"
      autoCorrect={false}/>
       <TextInput style={styles.TextInput}
      placeholder="Password"
      onChangeText={(password)=>setPassword(password) }
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}/>
    </View>

    <TouchableOpacity
      onPress={()=> LoginUser(email,password)}
      style={styles.button}>
        <Text style={{fontWeight:"bold",fontSize:22}}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=> navigation.navigate('Registration')}
      style={{marginTop:20}}>
        <Text style={{fontWeight:"bold",fontSize:16}}>Don't have an account? Register Now</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Login

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    marginTop:100

  },
  TextInput:{
    paddingTop:20,
    paddingBottom:10,
    width:400,
    fontSize:20,
    borderBottonWidth:1,
    borderBottomColor:"#000",
    marginBottom:10,
    textAlign:'center'

  },
  button:{
    marginTop:50,
    height:70,
    width:250,
    backgroundColor:'#026efd',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
  }
})