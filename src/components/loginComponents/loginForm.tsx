import React, {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {EmailInput} from './emailInput';
import {PasswordInput} from './passwordInput';
import {LoginButton} from './loginButton';
import {TextInput} from 'react-native-gesture-handler';
import {LoginFormRef} from '../../types/loginFormRef';

interface Props {
  onLoginPress?: () => void;
}

export const LoginForm = forwardRef(
  (props: Props, ref: ForwardedRef<LoginFormRef>) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef<TextInput>(null);

    useImperativeHandle(ref, ():LoginFormRef => ({
      getData: () => ({email, password}),
      setData: (newEmail: string, newPassword: string) => {
        setEmail(newEmail), setPassword(newPassword);
      },
    })); // sa facem o interfata

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
      //props.onLoginPress();
    };

    return (
      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.text}>Hi there!</Text>
        </View>
        {/* <View style={styles.container}> */}
        <View style={styles.card2}>
          <EmailInput onChangeText={emailChange} email={email}></EmailInput>
          {/* <TextInput ref={emailRef} keyboardType="email-address" style={styles.emailInput} /> */}
          <PasswordInput
            onSubmitEditing={() => emailRef.current?.focus()}
            onChangeText={passwordChange}
            password={password}></PasswordInput>
          {/* <LoginButton onPress={onButtonPress}></LoginButton> */}
        </View>

        {/* </View> */}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  emailInput: {
    padding: 10,
    width: 250,
    height: 50,
    // borderWidth: 2,
    // borderColor: '#D291BC',
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    color: '#957DAD',
  },
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flex: 2,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,

    // elevation: 24,
  },
  main: {
    backgroundColor: '#957DAD',
    width: '100%',
    height: '70%',
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
