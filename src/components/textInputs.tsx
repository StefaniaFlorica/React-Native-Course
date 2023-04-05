import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

export const MyTextInputs = () => {
  // const []
  const onChangeText = (text: string) => {
    console.log(text);
  };

  const Icon = require('../assets/images/checkmark-outline.png');

  return (
    <View style={styles.main}>
      {/* <TextInput
        placeholder="placeholder"
        placeholderTextColor="green"
        style={styles.input}
        keyboardType="email-address"
        onChangeText={text => onChangeText(text)}></TextInput>

      <View style={{borderBottomWidth: 1}}>
        <Text style={{color: 'black'}}>Password</Text>
        <TextInput
          placeholder="placeholder"
          style={styles.password}
          secureTextEntry
          onChangeText={text => onChangeText(text)}></TextInput>
      </View> */}

      {/* <View style={styles.main2}>
        <TextInput
          style={{color: 'black', flex: 1}}
          onChangeText={text => onChangeText(text)}></TextInput>
        <Image source={Icon} style={styles.image}></Image>
      </View> */}
      <View style={styles.black_border}>
        <TextInput
          style={styles.text_input}
          placeholder="type something..."
          onChangeText={(value) => onChangeText(value)}></TextInput>
        <Image source={Icon} style={styles.image}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text_input: {
    color: 'black',
    flex: 5,
  },
  black_border: {
    borderWidth: 1,
    width: 250,
    height: 40,
    flexDirection: 'row',
  },
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  main2: {
    flexDirection: 'row',
  },
  inputView: {
    margin: 24,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    color: 'black',
  },
  input2: {
    color: 'black',
  },
  password: {
    width: 200,
    height: 40,
    color: 'black',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    flex: 1,
  },
});
