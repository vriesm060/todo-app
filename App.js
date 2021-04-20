import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

import Header from './src/components/Header';

export default function App() {
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
  }

  return (
    <View>
      <Header title="Todo List" />
      <View style={styles.container}>
        <View>
          <TextInput 
            placeholder="Enter Todo Item"
            onChangeText={text => setTodoItem(text)}
            value={todoItem}
          />
          <Button 
            title="Add Todo" 
            onPress={addTodoList}
          />
        </View>
        <ScrollView>
          {
            todoList.map(todo => 
              <View key={todo}>
                <Text>{ todo }</Text>
              </View>
            )
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
