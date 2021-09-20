import React, {useState} from 'react';

import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import Task from './components/Task';

const TasksListScreen = () => {
  return (
    <View>
      <View>
        <Button title="ADD TASK" />
      </View>
      <Text style={styles.tasksMsg}>
        {tasks?.length ? 'Manage yours tasks' : 'Not tasks, add ones'}
      </Text>
      <View>
        <FlatList
          data={tasks}
          renderItem={({item}) => <Task task={item} removeTask={removeTask} />}
          keyExtractor={item => String(item.id.toString())}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tasksMsg: {
    marginVertical: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default TasksListScreen;
