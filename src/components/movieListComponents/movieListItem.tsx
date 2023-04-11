import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MovieCardIf} from '../../types/movieCardInterface';
import {useState} from 'react';

interface Props {
  data: MovieCardIf;
  onPress: (isLikePressed: boolean) => void;
}

export const MovieListItem = (props: Props) => {
  const [isLikePressed, setLikePressed] = useState(false);
  const [isDescriptionPressed, setIsDescriptionPressed] = useState(false);
  const heart1 = require('../../assets/images/heartt.png');
  const heart2 = require('../../assets/images/redheart.png');

  const onPressWrapper = () => {
    setLikePressed(!isLikePressed);
    props.onPress(isLikePressed);
  };

  const onPressDescription = () => {
    setIsDescriptionPressed(!isDescriptionPressed);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <View style={styles.posterContainer}>
          <Image source={props.data.image} style={styles.moviePic}></Image>
        </View>

        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionTitle}>
            <Pressable onPress={onPressDescription}>
              <Text style={styles.titleText}>{props.data.title}</Text>
            </Pressable>
            <Pressable onPress={onPressWrapper}>
              <Image
                source={isLikePressed ? heart2 : heart1}
                style={styles.icon}></Image>
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={onPressDescription}
              style={styles.descriptionText}>
              <Text
                numberOfLines={isDescriptionPressed ? 10 : 2}
                style={{textAlign: 'justify', flex: 1}}>
                {props.data.description}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionText: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flex: 1,
  },
  descriptionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 280,
    paddingBottom: 10,
    backgroundColor: '#FDE2BB',
    borderRadius: 40,
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: '#FDE2BB',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  posterContainer: {
    flex: 3,
    height: 295,
    borderRadius: 40,
    backgroundColor: '#F9CBA5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titleText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  moviePic: {
    width: 280,
    height: 280,
    borderRadius: 40,
  },
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FEF2E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    zIndex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 3,
    marginRight: 10,
    resizeMode: 'contain',
  },
});
