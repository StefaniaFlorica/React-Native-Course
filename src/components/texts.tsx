import {Image, Linking, StyleSheet, Text, View} from 'react-native';

export const MyTexts = () => {
  const onPress = () => {
    Linking.openURL('https://www.google.com');
  };

  const Dog = require('../assets/images/cat.jpg');
  return (
    <View style={styles.main}>
      {/* <Text style={styles.text1}>
        {'Hello '}
        <Text style={styles.text2}>World</Text>
      </Text> */}
      {/* <Text style={styles.text1} numberOfLines={2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text> */}
      {/* <Text style={styles.text2}>
        {'Accept the '}
        <Text style={styles.text1} onPress={onPress}>
          terms and conditions
        </Text>
      </Text> */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://conde.ro/wp-content/uploads/2022/05/caine-pomeranian-696x393.jpg',
        }}></Image>
      <Image style={styles.image} source={Dog}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  text1: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text2: {
    color: 'black',
    fontSize: 20,
  },
});
