import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {InfoFormRef} from '../../../types/infoFormRef';
import {PersonalInfoInterface} from '../../../types/personalInfoInterface';
interface Props {}
export const PersonalInfoFormV1 = forwardRef(
  (props: Props, ref: ForwardedRef<InfoFormRef>) => {
    const [details, setDetails] = useState<PersonalInfoInterface>({
      firstName: '',
      lastName: '',
    });
    const [fnError, setFnError] = useState(false);
    const [lnError, setLnError] = useState(false);

    useEffect(() => {
      console.log(details);
    }, [details]);

    useImperativeHandle(
      ref,
      (): InfoFormRef => ({
        checkData: () => {
          setFnError(isStringValid(details.firstName) ? false : true);
          setLnError(isStringValid(details.lastName) ? false : true);
        },
      }),
    );

    const isStringValid = (str: string) => {
      return (
        /^[a-zA-Z]+$/.test(str) ||
        !(str === '' || str === null || str === undefined)
      );
    };

    const setFirstName = (value: string) => {
      setDetails({...details, firstName: value});
    };

    const setLastName = (value: string) => {
      setDetails({...details, lastName: value});
    };
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Personal Info</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.text}>First name</Text>
          <TextInput
            placeholder="firstname"
            placeholderTextColor="#D8BFD8"
            keyboardType="default"
            style={[styles.input, {borderColor: fnError ? 'red' : '#957DAD'}]}
            onChangeText={setFirstName}></TextInput>
          <Text style={styles.text}>Last name</Text>
          <TextInput
            placeholder="lastname"
            placeholderTextColor="#D8BFD8"
            keyboardType="default"
            style={[
              styles.input,
              {marginBottom: 20},
              {borderColor: lnError ? 'red' : '#957DAD'},
            ]}
            onChangeText={setLastName}></TextInput>
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
