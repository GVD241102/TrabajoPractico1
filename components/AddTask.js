import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTask = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nueva tarea"
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
      />
      <Button title="Agregar tarea" onPress={handleAddTask} />
    </View>
  );
};

export default AddTask;
