import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PersonalInfoFormV1} from './personalInfoFormV1';
import {StudentInfoFormV1} from './studentInfoFormV1';
import {ScrollView} from 'react-native-gesture-handler';
import {useRef} from 'react';
import {PersonalInfoInterface} from '../../../types/personalInfoInterface';
import {InfoFormRef} from '../../../types/infoFormRef';

export const FormV1 = () => {
  const formRef1 = useRef<InfoFormRef>(null);
  const formRef2 = useRef<InfoFormRef>(null);

  const onSubmitPress = () => {
    formRef1.current?.checkData();
    formRef2.current?.checkData();
  };
  return (
    <View style={styles.main}>
      <View style={{width: '100%'}}>
        <PersonalInfoFormV1 ref={formRef1} />
      </View>
      <View style={{width: '100%'}}>
        <StudentInfoFormV1 ref={formRef2} />
      </View>
      <Pressable style={styles.button} onPress={onSubmitPress}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {color: 'white', fontWeight: 'bold', fontSize: 18},
  button: {
    marginTop: 30,
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
  main: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
