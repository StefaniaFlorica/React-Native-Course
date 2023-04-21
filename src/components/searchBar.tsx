import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDebounce} from '../hooks/use-debounce.hook';
import {useNetinfo} from '../hooks/use-netinfo.hook';

export const SearchBar = () => {
  const [searchState, setSearchState] = useState('');
  const searchVal = useDebounce<string>(searchState, 1000);
  const isConnected = useNetinfo();
  useEffect(() => {
    console.log(searchVal);
  }, [searchVal]);
  useEffect(() => {
    console.log(isConnected);
  }, [isConnected]);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TextInput style={styles.input} onChangeText={setSearchState}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    width: 250,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'pink',
    color: '#957DAD',
  },
});
