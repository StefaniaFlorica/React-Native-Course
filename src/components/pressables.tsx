import {useState} from 'react';
import {
  Alert,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PostInterface} from '../types/postInterface';

interface Props {
  post: PostInterface;
  onPress: (videoUrl: string, title: string) => void;
}

export const MyPressables = (props: Props) => {
  const [title, setTitle] = useState('ORIGINAL TITLE');
  const [likePressed, setLikePressed] = useState(false);
  const [likeTitle, setLikeTitle] = useState({id: 1, title: 'Like'});
  const profilePic = require('../assets/images/profile.jpg');
  const postPic = require('../assets/images/cat.jpg');
  const likeIcon = require('../assets/images/heart-outline.png');
  const commentIcon = require('../assets/images/comment.png');
  const shareIcon = require('../assets/images/share.png');

  // const onPressFunction = () => {
  //   console.log('Button1 pressed!');
  // };
  // const onPressIn = () => {
  //   setIsPressed(true);
  //   console.log('Button2 pressed in!');
  // };
  // const onPressOut = () => {
  //   setIsPressed(false);
  //   console.log('Button2 pressed out!');
  // };

  const showAlertWrapper = () => {
    props.onPress(props.post.videoUrl, props.post.titleAlert);
  };

  const changeTitle = () => {
    if (title === 'TITLE CHANGED') {
      setTitle('ORIGINAL TITLE');
    } else {
      setTitle('TITLE CHANGED');
    }
  };

  const changeLikeTitle = () => {
    setLikePressed(!likePressed);
    if (likeTitle.title === 'Like') {
      setLikeTitle({...likeTitle, title: 'Unlike'});
      //daca nu cream un obiect nou, nu se rerandeaza componenta, la fel e si la array-uri, se poate intalni si la styling, cand avem
      // un array de style-uri
    } else {
      setLikeTitle({...likeTitle, title: 'Like'});
    }
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.card_container}>
        <View style={styles.top_view}>
          <Pressable onPress={changeTitle}>
            <Image source={profilePic} style={styles.profile_pic}></Image>
          </Pressable>
          <Text style={styles.text}>{props.post.userName}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.center_view}>
          <Pressable style={{alignItems: 'center'}} onPress={showAlertWrapper}>
            <Image source={props.post.imageUri} style={styles.post_pic}></Image>
          </Pressable>
        </View>
        <View style={styles.description_view}>
          <Text style={styles.text}>{props.post.userName}</Text>
          <Text style={styles.text}>{props.post.description}</Text>
        </View>
        <View style={styles.bottom_view}>
          <Pressable style={styles.like} onPress={changeLikeTitle}>
            <Text style={styles.text}>{likeTitle.title}</Text>
            <Image source={likeIcon} style={styles.icon2}></Image>
          </Pressable>
          <Pressable style={styles.comment}>
            <Text style={styles.text}>Comment</Text>
            <Image source={commentIcon} style={styles.icon2}></Image>
          </Pressable>
          {likePressed && (
            <Pressable style={styles.share}>
              <Text style={styles.text}>Share</Text>
              <Image source={shareIcon} style={styles.icon2}></Image>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    marginRight: 5,
    marginLeft: 5,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon2: {
    width: 20,
    height: 20,
  },
  like: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  comment: {
    flex: 1,
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
    borderRightWidth: 1,
    borderRightColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  share: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  profile_pic: {
    marginLeft: 20,
    marginRight: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  post_pic: {
    width: 300,
    height: 300,
  },
  top_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  center_view: {
    flex: 8.3,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
    alignItems: 'center',
  },
  description_view: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  bottom_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_container: {
    width: 300,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  main_container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 100,
    height: 40,
    backgroundColor: 'lightblue',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
