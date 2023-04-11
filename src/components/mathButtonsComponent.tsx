import {Pressable, StyleSheet, Text, View} from 'react-native';
import {MathButton} from './buttons';
import {useState} from 'react';

export const CalculatorButtons = () => {
  const [sum, setSum] = useState(0);
  const onPressButton = (value: number) => {
    setSum(sum + value);
  };

  const reset = () => setSum(0);
  return (
    <View style={styles.main2}>
      <View style={styles.buttonRow}>
        <MathButton value={-1} onPress={onPressButton}></MathButton>
        <MathButton value={1} onPress={onPressButton}></MathButton>
      </View>
      <View>
        <Text>{sum}</Text>
      </View>
      <View style={styles.buttonRow}>
        <MathButton value={-2} onPress={onPressButton}></MathButton>
        <MathButton value={2} onPress={onPressButton}></MathButton>
      </View>
      <Pressable style={styles.reset} onPress={reset}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main2: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});
