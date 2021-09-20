import React from 'react';

import {StyleSheet, Text, View, FlatList} from 'react-native';
import Task from './Task';

export default TasksList = ({tasks, removeTask}) => {
  return (
    <>
      <Text style={styles.tasksMsg}>
        {tasks?.length ? 'Manage yours tasks' : 'Not tasks, add ones'}
      </Text>
      <View>
        {/* {tasks.map((task, idx) => (
          <Task removeTask={removeTask} key={idx} task={task}></Task>
        ))} */}
        <FlatList
          data={tasks}
          renderItem={({item}) => <Task task={item} removeTask={removeTask} />}
          keyExtractor={(item, idx) => idx}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tasksMsg: {
    marginVertical: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
});
