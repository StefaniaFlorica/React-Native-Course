import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';

const foods = [
  {
    title: 'Fast Food',
    data: [
      { name: 'KFC', image: require('../assets/images/kfc.png') },
      { name: 'McDonalds', image: require('../assets/images/mc.png') },
      { name: 'Spartan', image: require('../assets/images/spartan.png') },
      { name: 'Mesopotamia', image: require('../assets/images/meso.jpg') },
    ],
  },
  {
    title: 'Asian Food',
    data: [
      { name: 'Noodle Pack', image: require('../assets/images/noodle.jpg') },
      { name: 'Sakura', image: require('../assets/images/sak.jpg') },
      { name: 'Marhaba', image: require('../assets/images/marh.png') },
      { name: 'Taste of Asia', image: require('../assets/images/taste.jpg') },
    ],
  },
  {
    title: 'Pizza',
    data: [
      { name: '20 Pizza', image: require('../assets/images/kfc.png') },
      { name: 'Napoli Centrale', image: require('../assets/images/kfc.png') },
      { name: 'Poco Loco', image: require('../assets/images/kfc.png') },
      { name: 'Pizza Hut', image: require('../assets/images/kfc.png') },
    ],
  },
  {
    title: 'Snacks',
    data: [
      { name: 'Donuterie', image: require('../assets/images/kfc.png') },
      { name: 'Salad Box', image: require('../assets/images/kfc.png') },
      { name: 'Meron', image: require('../assets/images/kfc.png') },
      { name: 'Panemar', image: require('../assets/images/kfc.png') },
    ],
  },
];

const FoodList = () => {
  return (
    <ScrollView style={styles.container}>
      {foods.map((section, index) => (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {section.data.map((food, index) => (
              <View  style={styles.food}>
                <Image style={styles.image} source={food.image} />
                <Text style={styles.name}>{food.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  section: {
    marginBottom: 20,
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  food: {
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  name: {
    textAlign: 'center',
  },
});

export default FoodList;
