import {
  Alert,
  FlatList,
  Linking,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PostInterface} from '../types/postInterface';
import {MyPressables} from './pressables';

export const PostFlatList = () => {
  const postPic = require('../assets/images/cat.jpg');
  const dressPic = require('../assets/images/midi.png');
  const jeansPic = require('../assets/images/mom.png');
  const hoodiePic = require('../assets/images/hoodie.png');
  const profilePic4 = require('../assets/images/seara.png');
  const profilePic1 = require('../assets/images/heart.png');
  const profilePic2 = require('../assets/images/profile.jpg');
  const profilePic3 = require('../assets/images/skinny.png');

  const data: PostInterface[] = [
    {
      imageUri: postPic,
      profilePic: profilePic4,
      userName: 'stefi123',
      description: 'my cute cat <3',
      videoUrl: 'https://www.youtube.com/watch?v=NsUWXo8M7UA',
      titleAlert: 'You clicked the picture',
    },
    {
      imageUri: dressPic,
      profilePic: profilePic1,
      userName: 'user1',
      description: 'description1',
      videoUrl: 'https://www.youtube.com/watch?v=NsUWXo8M7UA',
      titleAlert: 'You clicked the picture',
    },
    {
      imageUri: jeansPic,
      profilePic: profilePic2,
      userName: 'user2',
      description: 'description2',
      videoUrl: 'https://www.youtube.com/watch?v=NsUWXo8M7UA',
      titleAlert: 'You clicked the picture',
    },
    {
      imageUri: hoodiePic,
      profilePic: profilePic3,
      userName: 'user3',
      description: 'description3',
      videoUrl: 'https://www.youtube.com/watch?v=NsUWXo8M7UA',
      titleAlert: 'You clicked the picture',
    },
  ];

  const showAlert = (videoUrl: string, title: string) => {
    Alert.alert(title, 'Do you want to see a video with cute cats?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => Linking.openURL(videoUrl),
      },
    ]);
  };
  const renderItem = ({item}: ListRenderItemInfo<PostInterface>) => (
    <MyPressables post={item} onPress={showAlert} />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: PostInterface) => item.userName}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text>Data is empty</Text>
        </View>
      }
      ListHeaderComponent={<View style={styles.header}></View>}
      ListFooterComponent={
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      }
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 25,
    backgroundColor: 'lightyellow',
  },
  header: {
    height: 50,
    backgroundColor: 'pink',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  footer: {
    height: 50,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    marginTop: 400,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
