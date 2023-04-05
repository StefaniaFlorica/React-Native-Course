import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export const MyScrollViews = () => {
  const kfc = require('../assets/images/kfc.png');
  return (
    <ScrollView contentContainerStyle={styles.main_list}>
      <View style={{flex:1}} >
        <Text>Fast Food</Text>
        <ScrollView horizontal contentContainerStyle={styles.mini_list}>
          <Image source={kfc} style={styles.pic}></Image>
          <Image source={kfc} style={styles.pic}></Image>
          <Image source={kfc} style={styles.pic}></Image>
          <Image source={kfc} style={styles.pic}></Image>
          <Image source={kfc} style={styles.pic}></Image>
        </ScrollView>
      </View>
      <View style={{flex:1}} >
        <Text>Fast Food</Text>
        <ScrollView horizontal contentContainerStyle={styles.mini_list}>
          <Image source={kfc} style={styles.pic}></Image>
        </ScrollView>
      </View>
      <View style={{flex:1}} >
        <Text>Fast Food</Text>
        <ScrollView horizontal contentContainerStyle={styles.mini_list}>
          <Image source={kfc} style={styles.pic}></Image>
        </ScrollView>
      </View>
      <View style={{flex:1}} >
        <Text>Fast Food</Text>
        <ScrollView horizontal contentContainerStyle={styles.mini_list}>
          <Image source={kfc} style={styles.pic}></Image>
        </ScrollView>
      </View>
      <View style={{flex:1}} >
        <Text>Fast Food</Text>
        <ScrollView horizontal contentContainerStyle={styles.mini_list}>
          <Image source={kfc} style={styles.pic}></Image>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main_list: {
    backgroundColor: 'pink',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mini_list: {
    borderRadius:50,
    height: 200,
    backgroundColor: 'lightblue',
    alignItems:'center'
  },
  pic: {
    width: 150,
    height: 150,
  },
});
