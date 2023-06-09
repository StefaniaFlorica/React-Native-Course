import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  LogBox,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MovieListItem} from './movieListItem';
import {useEffect, useMemo, useState} from 'react';
import {MovieCardIf} from '../../types/movieCardInterface';
import {movieData} from '../../data/movie-app-data';
import {SearchBar} from '../searchBar';
import {useSearch} from '../../hooks/use-search.hook';
import {MovieState, useMovieStore} from '../../store/useMovieStore';
import {MMKV} from 'react-native-mmkv';

interface Props {
  data: MovieCardIf[];
  onCardPress: (data: MovieCardIf) => void;
  refreshing: boolean;
  loading: boolean;
  loadingMore: boolean;
  onEndReachedFlatlist: () => void;
  onRefreshFlatList: () => void;
}

export const MovieList = (props: Props) => {
  const [likeNumber, setLikeNumber] = useState(0);
  const [searchVal, setSearchVal] = useState('');
  const storage = new MMKV();
  useEffect(() => {
    storage.set('key', 'din lista');
  });

  // useEffect(() => {
  //   console.log('number of likes has changed: ', likeNumber);
  // }, [likeNumber]);

  // useEffect(() => {
  //   return () =>
  //     console.log(
  //       '\n\nfinal number of likes when leaving the page: ',
  //       likeNumber,
  //     );
  // }, []);

  // const filteredMovies: MovieCardIf[] = useSearch(
  //   movieData,
  //   searchVal,
  //   'name',
  // );

  //console.debug({movieData, searchVal})
  const onSearchChange = (value: string) => {
    setSearchVal(value);
    console.log('search value changed', value);
  };

  const onLikePress = (isLikePressed: boolean) => {
    if (isLikePressed) {
      return setLikeNumber(likeNumber - 1);
    }
    return setLikeNumber(likeNumber + 1);
  };
  const renderItem = ({item}: ListRenderItemInfo<MovieCardIf>) => (
    <MovieListItem
      data={item}
      onPress={onLikePress}
      onPosterPress={props.onCardPress}></MovieListItem>
  );

  const renderFooter = useMemo(
    () => (
      <View style={styles.footer}>
        <Text style={[styles.title, {color: '#db0000'}]}>{likeNumber}</Text>
        <Text style={[styles.title, {fontWeight: 'normal'}]}>
          {' Favorites'}
        </Text>
      </View>
    ),
    [likeNumber],
  );

  LogBox.ignoreAllLogs();

  return (
    <View style={{flex: 1}}>
      <SearchBar onSearchChange={onSearchChange} />
      <FlatList
        style={{backgroundColor: '#F5F5F5'}}
        contentContainerStyle={
          !props.data?.length
            ? {flex: 1, justifyContent: 'center', alignItems: 'center'}
            : {}
        }
        data={props.data}
        renderItem={renderItem}
        onEndReached={props.onEndReachedFlatlist}
        onEndReachedThreshold={0.5}
        refreshing={props.refreshing}
        onRefresh={props.onRefreshFlatList}
        keyExtractor={(item: MovieCardIf, index) => index.toLocaleString()}
        ListEmptyComponent={
          props.loading ? (
            <View style={styles.listLoading}>
              <ActivityIndicator />
            </View>
          ) : (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>No data</Text>
            </View>
          )
        }
        ListFooterComponent={
          props.loadingMore ? <ActivityIndicator /> : <View />
        }
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listLoading: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {fontSize: 20, fontWeight: 'bold', color: '#db0000'},
  container: {
    backgroundColor: 'red',
  },
  separator: {
    height: 5,
    backgroundColor: '#831010',
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
    marginBottom: 5,
  },
  footer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 50,
    backgroundColor: 'black',
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
    marginTop: 5,
  },
});
