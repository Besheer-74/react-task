import React, { useState } from 'react';
import {Alert, StyleSheet, Text, View, TextInput , Button ,TouchableOpacity} from 'react-native';


  const LoginScreen = () => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={setusername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={styles.button}>
        <Button 
         title='Login'
         color="orange"
         onPress={() => (Alert.alert(`Welcome Back ${username}`))}
       />
      </View>
      <View>
        <Text style= {styles.dont}>
          Do not have account?
        </Text>
      </View>
      <TouchableOpacity style={styles.button2} >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color:'white',
      fontSize: 50,
      fontWeight: 'bold',
      paddingLeft: 50,
      paddingRight: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      backgroundColor: 'white',
      color: 'black',
      fontSize: 20,
      height: 50,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      width: 300,
      borderRadius: 10,
    },
    button: {
        paddingLeft: 0,
        paddingTop: 10,
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button2:{
      position: 'absolute',
      bottom:190,
      fontSize: 20,
    },
    buttonText: {
      color: '#1E90FF',
      fontSize: 25,
      fontWeight: 'bold',
    },
    dont: {
      fontSize: 20,
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: -75,
      right: -100,
      color: "white"
    }
  });
  const RegisterScreen = () => {
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    return (
      <View style={styl.container}>
        <SafeAreaView>
          <StatusBar style="auto" />
  
          <Text style={styl.box}>Register</Text>
  
          <TextInput
            style={styl.input}
            placeholder="username"
            value={username}
            onChangeText={setusername} />
          <TextInput
            style={styl.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail} />
          <TextInput
            style={styl.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} />
          <TextInput
            style={styl.input}
            placeholder="Phone number"
            value={phonenumber}
            onChangeText={setphonenumber}
            keyboardType='numeric' />
          <View style={styl.button}>
            <Button
              color="orange"
              title='Join'
              onPress={() => (Alert.alert(`congratulation ${username}`))} />
          </View>
        </SafeAreaView>
      </View>
  
  
    );
  }
  
  const styl = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      color:'white',
      fontSize: 50,
      fontWeight: 'bold',
      paddingLeft: 50,
      paddingRight: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      backgroundColor: 'white',
      color: 'black',
      fontSize: 20,
      height: 50,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      width: 300,
      borderRadius: 10,
    },
    button: {
      paddingLeft: 100,
      paddingTop: 10,
      width: 200,
      height: 50,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default LoginScreen;