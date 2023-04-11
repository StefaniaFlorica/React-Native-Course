import { useState } from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  onPress: () => void;
}

export const LoginButton = (props: Props) => {

  const [isPressed,setIsPressed] = useState(false);
  const onPressWrapper = () =>{
    // setIsPressed(!isPressed)
    props.onPress()
  }

  const onClick = () => {
    setIsPressed(!isPressed)
  }

  return (
    <View style={styles.main}>
      <Pressable style={[styles.button,{opacity:(isPressed?0.7:1)}]} onPress={onPressWrapper} onPressIn={onClick} onPressOut={onClick}>
        <Text style={styles.text}>Log in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {color: 'white', fontWeight: 'bold', fontSize: 18},
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    margin: 30,
    borderColor: '#957DAD',
    backgroundColor: '#957DAD',
    borderWidth: 2,
    borderRadius: 40,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
