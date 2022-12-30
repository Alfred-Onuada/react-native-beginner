import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';

export default function AddTodo({ submitHandler }: any) {

  const [text, setText] = useState('');

  const changeHandler = function (value: any) {
    setText(value);
  };

  return (
    <View style={styles.addTodoContainer}>
      <TextInput 
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
        />

        <Button
          onPress={() => submitHandler(text)}
          title='Add Todo'
          color='coral'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  addTodoContainer: {
    margin: 10
  }
})