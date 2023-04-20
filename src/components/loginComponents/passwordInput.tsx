import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface Props {
  onChangeText: (value: string) => void;
  onSubmitEditing: () => void;
  password:string
}

export const PasswordInput = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const open = require('../../assets/images/open.png');
  const closed = require('../../assets/images/closed.png');
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Password</Text>
      <View
        style={[
          styles.input,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <TextInput
        value={props.password}
        onSubmitEditing={props.onSubmitEditing}
          //   placeholder="password"
          //   placeholderTextColor="#FFDFD3"
          secureTextEntry={!isVisible}
          // caretHidden={true}
          onChangeText={value => props.onChangeText(value)}
          style={{flex: 4, color: '#957DAD'}}></TextInput>
        <Pressable
          onPress={() => setIsVisible(!isVisible)}
          style={{flex: 1, marginLeft: 5}}>
          <Image source={isVisible ? open : closed} style={styles.icon}></Image>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#957DAD',
  },

  input: {
    paddingLeft: 10,
    width: 250,
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
  },
});
