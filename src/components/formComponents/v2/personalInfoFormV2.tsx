import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {PersonalInfoInterface} from '../../../types/personalInfoInterface';
import {useEffect, useState} from 'react';

interface Props {
  details: PersonalInfoInterface;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  errors: {
    fnError: boolean;
    lnError: boolean;
  };
}
export const PersonalInfoFormV2 = (props: Props) => {
  useEffect(() => {
    console.log('from component:', props.errors);
  }, [props.errors]);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Personal Info.</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>First name</Text>
        <TextInput
          placeholder="first name"
          placeholderTextColor="#4c614c"
          keyboardType="default"
          value={props.details.firstName}
          style={[
            styles.input,
            {borderColor: props.errors.fnError ? 'red' : '#228B22'},
          ]}
          onChangeText={props.setFirstName}></TextInput>
        <Text style={styles.text}>Last name</Text>
        <TextInput
          placeholder="last name"
          placeholderTextColor="#4c614c"
          value={props.details.lastName}
          style={[
            styles.input,
            {marginBottom: 20},
            {borderColor: props.errors.lnError ? 'red' : '#228B22'},
          ]}
          keyboardType="default"
          onChangeText={props.setLastName}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0e380e',
  },
  titleContainer: {
    justifyContent: 'center',
    width: 250,
    alignItems: 'flex-end',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 2,
    borderColor: '#228B22',
    borderRadius: 30,
    backgroundColor: '#F5F5DC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#228B22',
    margin: 5,
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#228B22',
    padding: 10,
    width: 200,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    color: '#228B22',
  },
});
