import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PersonalInfoFormV2} from './personalInfoFormV2';
import {StudentInfoFormV2} from './studentInfoFormV2';
import {ScrollView} from 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import {PersonalInfoInterface} from '../../../types/personalInfoInterface';
import {StudentInfoInterface} from '../../../types/studentInfoInterface';

interface FormInfo {
  personal: PersonalInfoInterface;
  student: StudentInfoInterface;
}

interface FormErrors {
  fnError: boolean;
  lnError: boolean;
  facultyError: boolean;
  yearError: boolean;
}

export const FormV2 = () => {
  const [details, setDetails] = useState<FormInfo>({
    personal: {
      firstName: '',
      lastName: '',
    },
    student: {
      faculty: '',
      year: 0,
    },
  });

  const [errors, setErrors] = useState<FormErrors>({
    fnError: false,
    lnError: false,
    facultyError: false,
    yearError: false,
  });

  useEffect(() => {}, [details]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const setFirstName = (firstName: string) => {
    const lastName = details.personal.lastName;
    setDetails({...details, personal: {firstName, lastName}});
  };

  const setLastName = (lastName: string) => {
    const firstName = details.personal.firstName;
    setDetails({...details, personal: {firstName, lastName}});
  };

  const setFaculty = (faculty: string) => {
    const year = details.student.year;
    setDetails({...details, student: {faculty, year}});
  };
  const setYear = (yearStr: string) => {
    const faculty = details.student.faculty;
    const year = Number(yearStr);
    setDetails({...details, student: {faculty, year}});
  };
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

  const onSubmit = () => {
    const fnError = isStringValid(details.personal.firstName) ? false : true;
    const lnError = isStringValid(details.personal.lastName) ? false : true;
    const facultyError = isStringValid(details.student.faculty) ? false : true;
    const yearError = isYearValid(details.student.year) ? false : true;
    setErrors({fnError, lnError, facultyError, yearError});
  };

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={{width: '100%'}}>
        <PersonalInfoFormV2
          details={details.personal}
          setFirstName={setFirstName}
          setLastName={setLastName}
          errors={{fnError: errors.fnError, lnError: errors.lnError}}
        />
      </View>
      <View style={{width: '100%'}}>
        <StudentInfoFormV2
          details={details.student}
          setFaculty={setFaculty}
          setYear={setYear}
          errors={{
            facultyError: errors.facultyError,
            yearError: errors.yearError,
          }}
        />
      </View>
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonText: {color: 'white', fontWeight: 'bold', fontSize: 18},
  button: {
    marginTop: 30,
    backgroundColor: '#228B22',

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
  main: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
