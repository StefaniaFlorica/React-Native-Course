import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface Props {
  onChangeText: (value: string) => void;
}

export const EmailInput = (props: Props) => {
  const [error, setError] = useState("");

  const isValidEmail = (email:string) =>{
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (value:string) => {
    if(!isValidEmail(value)) {
      setError('Email is invalid');
    } else {
      setError('');
      props.onChangeText(value);
    }
  };

  return (
    <View
      style={styles.main}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        // placeholder="email"
        // placeholderTextColor="#FFDFD3"
        keyboardType="email-address"
        style={styles.input}
        // caretHidden={true}
        onChangeText={(value) => handleChange(value)}
        ></TextInput>
        {(error!=="" && <Text style={{color: '#957DAD'}}>{error}</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
  },
  text: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color:'#957DAD'
  },

  input: {
    padding: 10,
    width: 250,
    height: 50,
    // borderWidth: 2,
    // borderColor: '#D291BC',
    borderRadius: 30,
    backgroundColor:'#F5F5F5',
    color:'#957DAD'
  },
});
