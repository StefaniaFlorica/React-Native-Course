/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  FlatList,
  Linking,
  ListRenderItemInfo,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {MyViews} from './src/components/views';
import {MyTexts} from './src/components/texts';
import {MyTextInputs} from './src/components/textInputs';
import {MyPressables} from './src/components/pressables';
import {MyScrollViews} from './src/components/scrollViews';
import FoodList from './src/components/foodList';
import {MyFashionScrollList} from './src/components/fashionList';
import {PostInterface} from './src/types/postInterface';
import { LoginForm } from './src/components/loginComponents/loginForm';
import { MovieList } from './src/components/movieListComponents/movieList';
import { CalculatorButtons } from './src/components/mathButtonsComponent';
import { PostFlatList } from './src/components/postFlatList';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [state, setState] = useState('');


  
  return (

<LoginForm></LoginForm>
  
  );
}

const styles = StyleSheet.create({
  reset: {
    width: 60,
    height: 60,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  main2: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
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

export default App;
