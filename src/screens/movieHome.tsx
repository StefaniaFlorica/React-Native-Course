import { StyleSheet, Text, View } from "react-native";
import { MovieBottomTabRoutes } from "../navigation/routes/movie-bottom-tabs-routes";
import { MMKV } from "react-native-mmkv";
import { useEffect } from "react";

export const MoviesHomeScreen = () => {
  const storage = new MMKV();

  useEffect(()=>{
    const res = storage.getString('key')
    console.log(res);
    
  },[]);
    return (
      <View style={styles.main}>
        <Text style={styles.title}>{MovieBottomTabRoutes.Home}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    main: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    }
  });
  