import React, {useState} from 'react';

import {StyleSheet, Keyboard, View, Text, ScrollView} from 'react-native';

import Form from './src/components/Form';
import TasksList from './src/components/TasksList';

const testTasks = [
  {
    id: '1',
    name: 'Marcos',
    area: 'UX-UI',
    description: 'Do application test',
  },
  {
    id: '2',
    name: 'Maria',
    area: 'Dev',
    description: 'Test with Jest',
  },
  {
    id: '3',
    name: 'Sebastian',
    area: 'Dev',
    description: 'Develop API back',
  },
];

export default function App() {
  const [tasks, setTasks] = useState(testTasks);

  const addTask = task => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const removeTask = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Task Manager</Text>
      </View>
      <ScrollView>
        <TasksList tasks={tasks} removeTask={removeTask} />
        <View style={styles.divider}></View>
        <Form addTask={addTask}></Form>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F8F8F8',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  divider: {
    height: 5,
    width: 600,
    marginVertical: 20,
    backgroundColor: 'black',
  },
});
