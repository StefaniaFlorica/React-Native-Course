import {ForwardedRef, forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {InfoFormRef} from '../../../types/infoFormRef';
import {StudentInfoInterface} from '../../../types/studentInfoInterface';
interface Props {}
export const StudentInfoFormV1 = forwardRef(
  (props: Props, ref: ForwardedRef<InfoFormRef>) => {
    const [details, setDetails] = useState<StudentInfoInterface>({
      faculty: '',
      year: 0,
    });
    const [facultyError, setFacultyError] = useState(false);
    const [yearError, setYearError] = useState(false);

    useImperativeHandle(
      ref,
      (): InfoFormRef => ({
        checkData: () => {
          setFacultyError(isStringValid(details.faculty) ? false : true);
          setYearError(isYearValid(details.year) ? false : true);
        },
      }),
    );

    const isStringValid = (str: string) => {
      return (
        /^[a-zA-Z]+$/.test(str) &&
        !(str === '' || str === null || str === undefined)
      );
    };

    const isYearValid = (value?: string | number) => {
      const convertedValue = Number(value?.toString());
      return (
        (value !== null || value !== undefined) &&
        value !== '' &&
        !isNaN(convertedValue) &&
        convertedValue < 6 &&
        convertedValue > 0
      );
    };

    const setFaculty = (value: string) => {
      setDetails({...details, faculty: value});
    };

    const setYear = (value: string) => {
      setDetails({...details, year: Number(value)});
    };
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Student Info</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.text}>Faculty</Text>
          <TextInput
            placeholder="faculty"
            placeholderTextColor="#D8BFD8"
            keyboardType="default"
            style={[
              styles.input,
              {borderColor: facultyError ? 'red' : '#957DAD'},
            ]}
            onChangeText={setFaculty}></TextInput>
          <Text style={styles.text}>Year</Text>
          <TextInput
            placeholder="year"
            placeholderTextColor="#D8BFD8"
            keyboardType="numeric"
            style={[
              styles.input,
              {marginBottom: 20},
              ,
              {borderColor: yearError ? 'red' : '#957DAD'},
            ]}
            onChangeText={setYear}></TextInput>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleContainer: {
    justifyContent: 'center',
    width: 250,
    alignItems: 'flex-start',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 2,
    borderColor: '#957DAD',
    borderRadius: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#957DAD',
    margin: 5,
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#957DAD',
    padding: 10,
    width: 200,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    color: '#957DAD',
  },
});
