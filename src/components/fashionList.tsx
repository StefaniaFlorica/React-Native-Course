import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export const MyFashionScrollList = () => {
  const sections = [
    {
      title: 'Tops',
      categories: [
        {name: 'Tank Tops', image: require('../assets/images/tank.png')},
        {name: 'Shirts', image: require('../assets/images/shirt.png')},
        {name: 'Hoodies', image: require('../assets/images/hoodie.png')},
      ],
    },
    {
      title: 'Jeans',
      categories: [
        {name: 'Mom Jeans', image: require('../assets/images/mom.png')},
        {name: 'Baggy Jeans', image: require('../assets/images/baggy.png')},
        {name: 'Skinny Jeans', image: require('../assets/images/skinny.png')},
      ],
    },
    {
      title: 'Dresses',
      categories: [
        {name: 'Mini Dresses', image: require('../assets/images/mini.png')},
        {name: 'Midi Dresses', image: require('../assets/images/midi.png')},
        {name: 'Night Dresses', image: require('../assets/images/seara.png')},
      ],
    },
    {
      title: 'Accessories',
      categories: [
        {name: 'Earrings', image: require('../assets/images/ear.png')},
        {name: 'Necklaces', image: require('../assets/images/neck.png')},
        {name: 'Belts', image: require('../assets/images/belt.png')},
      ],
    },
  ];
  return (
    <ScrollView style={styles.main}>
      {sections.map((section, index) => (
        <View key={index} style={styles.view1}>
          <Text style={styles.title}>{section.title}</Text>
          <ScrollView
            horizontal={true}
            style={styles.section}
            showsHorizontalScrollIndicator={false}>
            {section.categories.map((category, idx) => (
              <View key={idx} style={styles.section_view}>
                <Image source={category.image} style={styles.image}></Image>
                <Text style={styles.subtitle}>{category.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view1: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  subtitle: {
    textAlign: 'center',
  },
  main: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  section: {
    flex: 1,
    backgroundColor: '#F9F7F7',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  section_view: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 30,
    margin: 10,
  },
});
