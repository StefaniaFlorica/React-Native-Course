import {StyleSheet, Text, View} from 'react-native';
import {MovieCardIf} from '../../types/movieCardInterface';
import {ForwardedRef, forwardRef, useImperativeHandle, useState} from 'react';
import { DetailsTextRef } from '../../types/detailsTextRef';

interface Props {
  data: MovieCardIf;
}

export const DetailsText = forwardRef((props: Props, ref:ForwardedRef<DetailsTextRef>) => {
  const [textColor, setTextColor] = useState('black');
  useImperativeHandle(ref, (): DetailsTextRef=> ({
    setNewColor: (color: string) => {
      setTextColor(color);
    },
  }));
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {color: textColor}]}>
          {props.data.title}
        </Text>
      </View>
      <Text style={[styles.description, {color: textColor}]}>
        {' '}
        {props.data.description}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
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
});
