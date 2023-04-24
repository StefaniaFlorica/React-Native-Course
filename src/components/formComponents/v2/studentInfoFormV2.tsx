import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {StudentInfoInterface} from '../../../types/studentInfoInterface';
interface Props {
  details: StudentInfoInterface;
  setFaculty: (value: string) => void;
  setYear: (value: string) => void;
  errors: {
    facultyError: boolean;
    yearError: boolean;
  };
}
export const StudentInfoFormV2 = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Student Info.</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>Faculty</Text>
        <TextInput
          placeholder="faculty"
          placeholderTextColor="#4c614c"
          keyboardType="default"
          style={[
            styles.input,
            {borderColor: props.errors.facultyError ? 'red' : '#228B22'},
          ]}
          onChangeText={props.setFaculty}></TextInput>
        <Text style={styles.text}>Year</Text>
        <TextInput
          placeholder="year"
          placeholderTextColor="#4c614c"
          keyboardType="numeric"
          style={[
            styles.input,
            {marginBottom: 20},
            {borderColor: props.errors.yearError ? 'red' : '#228B22'},
          ]}
          onChangeText={props.setYear}></TextInput>
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
