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

export const MyPressables = () => {
  const [isPressed, setIsPressed] = useState(false);
  const profilePic = require('../assets/images/profile.jpg');
  const postPic = require('../assets/images/cat.jpg');
  const likeIcon = require('../assets/images/heart-outline.png');
  const commentIcon = require('../assets/images/comment.png');
  const shareIcon = require('../assets/images/share.png');

  const onPressFunction = () => {
    console.log('Button1 pressed!');
  };
  const onPressIn = () => {
    setIsPressed(true);
    console.log('Button2 pressed in!');
  };
  const onPressOut = () => {
    setIsPressed(false);
    console.log('Button2 pressed out!');
  };

  const showAlert = () => {
    Alert.alert(
      'You pressed the picture',
      'Do you want to see a video with cute cats?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () =>
            Linking.openURL('https://www.youtube.com/watch?v=E9iP8jdtYZ0'),
        },
      ],
    );
  };

  return (
    // <View style={styles.main_container}>
    //   <Pressable style={styles.button} onPress={onPressFunction}>
    //     <Text>Press me!</Text>
    //   </Pressable>
    //   <Pressable
    //     style={[
    //       styles.button,
    //       {height: 50,backgroundColor: 'pink', opacity: isPressed ? 0.5 : 1},
    //     ]}
    //     onPressIn={onPressIn}
    //     onPressOut={onPressOut}>
    //     <Text>Press me!</Text>
    //     <Image source={Icon} style={styles.icon}></Image>
    //   </Pressable>
    // </View>
    <View style={styles.main_container}>
      <View style={styles.card_container}>
        <View style={styles.top_view}>
          <Pressable>
            <Image source={profilePic} style={styles.profile_pic}></Image>
          </Pressable>
          <Text style={styles.text}>username123</Text>
        </View>
        <View style={styles.center_view}>
          <Pressable style={{alignItems:'center'}}onPress={showAlert}>
            <Image source={postPic} style={styles.post_pic}></Image>
          </Pressable>
        </View>
        <View style={styles.description_view}>
            <Text style={styles.text}>username123</Text>
            <Text>{'my cute cat <3                     '}</Text>
        </View>
        <View style={styles.bottom_view}>
          <Pressable style={styles.like}>
            <Text style={styles.text}>Like</Text>
            <Image source={likeIcon} style={styles.icon2}></Image>
          </Pressable>
          <Pressable style={styles.comment}>
            <Text style={styles.text}>Comment</Text>
            <Image source={commentIcon} style={styles.icon2}></Image>
          </Pressable>
          <Pressable style={styles.share}>
            <Text style={styles.text}>Share</Text>
            <Image source={shareIcon} style={styles.icon2}></Image>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color:'black'
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
    width:300,
    height:300,
    
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
    alignItems:'center'
  },
  description_view: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth:1,
    borderBottomColor:'grey'
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
