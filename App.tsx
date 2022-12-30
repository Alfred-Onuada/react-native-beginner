import { useState } from 'react';
import { StyleSheet, Alert, View, SafeAreaView, Platform, StatusBar, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'creat an app', key: 2 },
    { text: 'play on the switch', key: 3 },
  ])

  const pressHandler = function(key:any) {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.key !== key));
  }

  const submitHandler = (text: any) => {

    // tiny validation
    if (text.length < 3) {
      Alert.alert('OOPs!', 'Todos must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('Alert closed') },
      ])
      return;
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos, 
        { text, key: (prevTodos[prevTodos.length - 1].key + 1) }
      ]
    })
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header></Header>

        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}></AddTodo>

          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => {
                return (<TodoItem item={item} pressHandler={pressHandler}></TodoItem>)
              }}
            />
          </View>
        </View>
          
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  content: {

  },
  list: {
    margin: 20
  }
});
