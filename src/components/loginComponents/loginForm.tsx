import React, {useState} from 'react';
import {Alert,StyleSheet, Text, View} from 'react-native';
import {EmailInput} from './emailInput';
import {PasswordInput} from './passwordInput';
import {LoginButton} from './loginButton';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChange = (value: string) => {
    setEmail(value);
    console.log(value);
  };
  const passwordChange = (value: string) => {
    setPassword(value);
    console.log(value);
  };

  const onButtonPress = () => {
    Alert.alert(
      'You credentials',
      `${email}\n${password}\nDo you want to continue?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => console.log('Yes Pressed'),
        },
      ],
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
      {/* <View style={styles.container}> */}
      <View style={styles.card2}  >
        <EmailInput onChangeText={emailChange}></EmailInput>
        <PasswordInput onChangeText={passwordChange}></PasswordInput>
        <LoginButton onPress={onButtonPress}></LoginButton>
      </View>

      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4c69a5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 50,
    color: '#F5F5F5',
  },
  title: {
    flex: 1,
    backgroundColor: '#957DAD',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  card2: {
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flex: 2,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  main: {
    backgroundColor: '#957DAD',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  // container: {
  //   width: 270,
  //   height: 300,
  //   backgroundColor: '#FFDFD3',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderWidth: 2,
  //   borderColor: '#957DAD',
  //   borderRadius: 60,
  // },
});
