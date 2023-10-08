import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';


export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: tasks.length + 1, text }]);
  };

  return (
    <View style={styles.container}>
      <TaskList tasks={tasks} />
      <AddTask onAddTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
