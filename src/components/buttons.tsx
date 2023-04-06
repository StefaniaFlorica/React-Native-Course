import {Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  value: number;
  onPress: (value: number) => void;
}

export const MathButton = (props: Props) => {
  const onPressWrapper = () => props.onPress(props.value);

  return (
    <Pressable style={styles.button} onPress={onPressWrapper}>
      <Text>{(props.value > 0 ? '+' : '') + props.value}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    backgroundColor: 'pink',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
