import {StyleSheet, Text, View} from 'react-native';
import {MovieBottomTabRoutes} from '../navigation/routes/movie-bottom-tabs-routes';

export const MoviesDiscoverScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{MovieBottomTabRoutes.Discover}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
