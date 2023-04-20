import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {MovieCardIf} from '../../types/movieCardInterface';
import {
  DownloadIcon,
  HeartIcon,
  PlayIcon,
  PlusIcon,
  ShareIcon,
} from '../../assets/icons';

interface Props {
  data: MovieCardIf;
}

export const MovieDetails = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Pressable style={styles.posterContainer}>
        <Image source={props.data.image} style={styles.poster}></Image>
      </Pressable>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.data.title}</Text>
      </View>
      <Pressable style={styles.playButton}>
        <PlayIcon width={25} height={25} fill="#DCDCDC"></PlayIcon>
        <Text style={styles.playText}>Play</Text>
      </Pressable>
      <Pressable style={[styles.playButton, {backgroundColor: '#564d4d'}]}>
        <DownloadIcon width={25} height={25} fill="#DCDCDC"></DownloadIcon>
        <Text style={styles.downloadText}>Download</Text>
      </Pressable>
      <Text style={styles.description}> {props.data.description}</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.icon}>
          <PlusIcon width={30} height={30} fill="#831010" />
          <Text style={{fontSize: 10}}>My List</Text>
        </View>
        <View style={styles.icon}>
          <HeartIcon width={30} height={30} fill="#831010" />
          <Text style={{fontSize: 10}}>Rate</Text>
        </View>
        <View style={styles.icon}>
          <ShareIcon width={30} height={30} fill="#831010" />
          <Text style={{fontSize: 10}}>Share</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    flex: 0.5,
    marginBottom: 10,
  },
  posterContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    padding: 5,
  },
  playText: {
    color: '#DCDCDC',
    fontSize: 16,
  },
  downloadText: {
    color: '#DCDCDC',
    fontSize: 16,
  },
  playButton: {
    width: '95%',
    flexDirection: 'row',
    backgroundColor: '#be2e33',
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  description: {
    flex: 0.5,
    color: '#831010',
    textAlign: 'justify',
    margin: 10,
    fontSize: 16,
    // backgroundColor:'pink'
  },
  titleContainer: {
    flex: 0.3,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    // flex: 1,
    // textAlign:'left',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#831010',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  poster: {
    // flex: 1,
    // width: '100%',
    width: '100%',
    height: '100%',
    // resizeMode:'contain',
    // height: 280,
    borderRadius: 30,
  },
});
