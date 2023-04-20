import {View} from 'react-native';
import {LoginForm} from '../components/loginComponents/loginForm';
import {LoginButton} from '../components/loginComponents/loginButton';
import {useRef} from 'react';
import {LoginFormRef} from '../types/loginFormRef';

export const LoginScreen = () => {
  const onLoginIn = () => {
    loginScreenRef.current?.setData('1a2aaaa@fdf.com', '352415');
    console.log(loginScreenRef.current?.getData());
  };
  const loginScreenRef = useRef<LoginFormRef>(null);
  return (
    <View style={{flex: 1}}>
      <LoginForm ref={loginScreenRef} />
      <LoginButton onPress={onLoginIn} />
    </View>
  );
};
