import React from 'react';
import { View, Text, FlatList } from 'react-native';

const TaskList = ({ tasks }) => {
  return (
    <View>
      <Text>Lista de Tareas:</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TaskList;
