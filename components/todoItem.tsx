import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }: any) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <MaterialIcons name="delete" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemText: {
    textTransform: 'capitalize'
  }
})