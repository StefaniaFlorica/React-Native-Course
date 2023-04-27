import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MovieCardIf} from '../../types/movieCardInterface';
import {useMemo, useState} from 'react';
import {HeartFilledIcon, HeartIcon} from '../../assets/icons';

interface Props {
  data: MovieCardIf;
  onPress: (isLikePressed: boolean) => void;
  onPosterPress: (data: MovieCardIf) => void;
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

  const onPosterPressWrapper = () => {
    props.onPosterPress(props.data);
  };
  const renderTitle = useMemo(
    () => <Text style={styles.titleText}>{props.data.name}</Text>,
    [],
  );
  const renderPoster = useMemo(
    () => (
      <Pressable style={styles.posterContainer} onPress={onPosterPressWrapper}>
        <Image source={{uri:props.data.image}} style={styles.moviePic}></Image>
      </Pressable>
    ),
    [],
  );
  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        {renderPoster}
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionTitle}>
            <Pressable onPress={onPressDescription}>{renderTitle}</Pressable>
            <Pressable onPress={onPressWrapper}>
              {/* <Image
                source={isLikePressed ? heart2 : heart1}
                style={styles.icon}></Image> */}
              <HeartFilledIcon
                height={25}
                width={25}
                fill={isLikePressed ? '#db0000' : 'black'}
                style={{marginRight: 5}}
              />
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
    backgroundColor: 'white',
    borderRadius: 40,
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.42,
    shadowRadius: 5.22,
    elevation: 8,
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  posterContainer: {
    flex: 3,
    height: 295,
    borderRadius: 40,
    backgroundColor: '#db0000',
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
    backgroundColor: '#F5F5F5',
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
