import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDebounce} from '../hooks/use-debounce.hook';
import {useNetinfo} from '../hooks/use-netinfo.hook';
import { SearchIcon } from '../assets/icons';

interface Props {
  onSearchChange: (value: string) => void;
}
export const SearchBar = (props: Props) => {
  const [searchState, setSearchState] = useState('');
  const searchVal = useDebounce<string>(searchState, 1000);
  // const isConnected = useNetinfo();
  // const isConnected = useNetinfo();
  useEffect(() => {
    console.log(searchVal);
    props.onSearchChange(searchVal)
  }, [searchVal]);
  // useEffect(() => {
  //   console.log(isConnected);
  // }, [isConnected]);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center',flexDirection:'row'}}>
      <TextInput style={styles.input} onChangeText={setSearchState}></TextInput>
      <SearchIcon height={25} width={25} marginTop={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    // padding: 10,
    width: 250,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'white',
    color: 'grey',
    borderWidth: 1,
    borderColor: 'grey',
  },
});
