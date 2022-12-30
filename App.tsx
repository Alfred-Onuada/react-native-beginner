import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  let [users, setUsers] = useState([
    { name: 'Alfred', age: 19, key: 1 },
    { name: 'Rhoda', age: 18, key: 2 },
    { name: 'Michelle', age: 14, key: 3 },
    { name: 'Ray', age: 22, key: 4 },
    { name: 'Henry', age: 21, key: 5 },
    { name: 'Jesse', age: 11, key: 6 },
    { name: 'Emma', age: 13, key: 7 },
    { name: 'Nico', age: 10, key: 8 }
  ])

  const deleteItem = function(key: number) {
    setUsers(prevUsers => prevUsers.filter(user => user.key !== key));
  }

  const newUser = {
    name: '',
    age: 0,
    key: 0
  }

  const updateUsers =  function () {

    newUser.key = +users[users.length - 1].key + 1;

    if (newUser.name == '' || newUser.age == 0 || newUser.key == 0) {
      return;
    }

    users.push(newUser);

    setUsers(users)

  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
          
          <ScrollView>
            {
              users.map(user => (
                <TouchableOpacity onLongPress={() => deleteItem(user.key)}
                  key={user.key}>
                  <View style={styles.userContainer}>
                    <Text style={styles.text}>Hello I am {user.name} I'm {user.age} years old</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Enter your name: </Text>
            <TextInput style={styles.inputBox} onChangeText={(value) => {newUser.name = value}}></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Enter your age: </Text>
            <TextInput style={styles.inputBox} onChangeText={(value) => {newUser.age = +value}}
              keyboardType='number-pad'></TextInput>
          </View>

          <TouchableOpacity style={styles.saveBtn} onPress={updateUsers}>
            <Text style={styles.saveBtnText}>Update</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  userContainer: {
    backgroundColor: 'red',
    padding: 15,
    margin: 15,
  },
  inputContainer: {
    marginHorizontal: 15,
    marginVertical: 15
  },
  inputLabel: {
    fontSize: 15
  },
  inputBox: {
    width: '100%',
    borderColor: 'darkgray',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  saveBtn: {
    backgroundColor: 'blue',
    margin: 15,
    paddingVertical: 15
  },
  saveBtnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  }
});
