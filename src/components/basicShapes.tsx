  
 import { StyleSheet, View } from "react-native"; 
  
 export const BasicViews = () =>{
    return (
    <View>
        <View style={styles.flag}>
            <View style={styles.blue}></View>
            <View style={styles.yellow}></View>
            <View style={styles.red}> </View>
        </View>
     <View
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <View style={styles.square1}></View>

      <View style={styles.square2}></View>
    </View>

    <View style={styles.main}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      </View>
    </View>

    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={{marginTop: 20,marginBottom: 20, width:30, height:30, backgroundColor: 'pink', transform: [{rotate: '45deg'}]}}></View>
      {/* <View style={{width:30, height:30, backgroundColor: 'pink', transform: [{rotate: '45deg'}]}}></View> */}
    </View>
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={styles.shadow}>
        {/* <View style={styles.circle1} >
            <Text style={{color: 'white'}}>Hello</Text>
        </View> */}

        {/* <View style={{width:30, height:30, backgroundColor: 'pink', transform: [{rotate: '45deg'}]}}></View>
        <View style={styles.circle2} /> */}
      </View>
        </View>
    </View>);}
 


const styles = StyleSheet.create({

        sectionContainer: {
          marginTop: 32,
          paddingHorizontal: 24,
        },
        sectionTitle: {
          fontSize: 24,
          fontWeight: '600',
        },
        sectionDescription: {
          marginTop: 8,
          fontSize: 18,
          fontWeight: '400',
        },
        highlight: {
          fontWeight: '700',
        },
        flag: {
          width: '100%',
          height: '100%',
          //height: 200,
          //backgroundColor: 'pink',
          flexDirection: 'row',
        },
        blue: {
          flex: 1,
          backgroundColor: 'blue',
        },
        yellow: {
          flex: 1,
          backgroundColor: 'yellow',
        },
        red: {
          flex: 1,
          backgroundColor: 'red',
        },
        square1: {
          width: 30,
          height: 30,
          backgroundColor: 'pink',
        },
        square2: {
          width: 30,
          height: 30,
          backgroundColor: 'lightblue',
        },
        circle1: {
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        },
        circle2: {
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: 'yellow',
        },
        main: {
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        },
        shadow: {
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });