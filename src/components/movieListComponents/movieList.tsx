import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MovieListItem} from './movieListItem';
import {useState} from 'react';
import {MovieCardIf} from '../../types/movieCardInterface';

export const MovieList = () => {
  const coherence = require('../../assets/images/coherence.png');
  const interstellar = require('../../assets/images/interstellar.png');
  const cloverfield = require('../../assets/images/clover.png');
  const getout = require('../../assets/images/get-out.png');
  const [likeNumber, setLikeNumber] = useState(0);
  const data = [
    {
      image: coherence,
      title: 'Coherence',
      description:
        'Strange things begin to happen when a group of friends gather for a dinner party on an evening when a comet is passing overhead.',
    },
    {
      image: interstellar,
      title: 'Interstellar',
      description:
        'A group of explorers make use of a newly discovered wormhole to surpass the limitations on.',
    },
    {
      image: cloverfield,
      title: 'Cloverfield Line',
      description:
        'A young woman is held in an underground bunker by a man who insists that a hostile event has left the surface of the Earth uninhabitable.',
    },
    {
        image: getout,
        title: 'Get Out',
        description:
          'A young African-American visits his White girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
      },
  ];

  const onLikePress = (isLikePressed: boolean) => {
    if (isLikePressed) {
      setLikeNumber(likeNumber - 1);
    } else {
      setLikeNumber(likeNumber + 1);
    }
  };
  const renderItem = ({item}: ListRenderItemInfo<MovieCardIf>) => (
    <MovieListItem data={item} onPress={onLikePress}></MovieListItem>
  );

  return (
    <FlatList
      style={{backgroundColor: '#FEF2E6'}}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: MovieCardIf) => item.title}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>{'MY FLIXX'}</Text>
        </View>
      }
      ListFooterComponent={
        <View style={styles.footer}>
          <Text style={[styles.title, {color: 'black'}]}>{likeNumber}</Text>
          <Text style={[styles.title, {fontWeight: 'normal'}]}>
            {' Favorites'}
          </Text>
        </View>
      }
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
    />
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 20, fontWeight: 'bold', color: 'black',},
  container: {
    backgroundColor: 'red',
  },
  separator: {
    height: 5,
    backgroundColor: '#FFC7AD',
    opacity: 0.3,
  },
  header: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    height: 50,
    backgroundColor: '#FFC7AD',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 5,
    marginBottom:5
  },
  footer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 50,
    backgroundColor: '#FFC7AD',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 5,
    shadowRadius: 16,

    elevation: 7,
    marginTop:5
  },
});
