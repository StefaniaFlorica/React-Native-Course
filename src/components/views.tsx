import {LayoutChangeEvent, StyleSheet, View} from 'react-native';

export const MyViews = () => {

    const onLayout = (e) => {
        console.log(e.nativeEvent)
    }
  return (
    <View style={styles.main}>
      {/* <View style={styles.square}></View> */}
      <View style={styles.rectangle}>
        <View style={styles.top}></View>
        <View style={styles.bottom}>
          <View style={styles.bottom1}></View>
          <View style={styles.bottom2} onLayout={onLayout}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  top: {
    flex: 2,
    backgroundColor: 'lightgreen',
  },
  bottom: {flex: 1, flexDirection: 'row'},
  bottom1: {
    flex: 1,
    backgroundColor: 'pink',
  },
  bottom2: {
    flex: 1,
    backgroundColor: 'lightyellow',
  },
  square: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 20,
    borderColor: 'pink',
  },
  rectangle: {
    width: 200,
    height: 300,
    backgroundColor: 'lightblue',
    borderWidth:1,
    borderColor: 'black'
  },
});
