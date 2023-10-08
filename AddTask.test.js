import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddTask from './components/AddTask';


describe('AddTask', () => {
  test('debe llamar a la función onAddTask cuando se agrega una tarea', () => {
    // Arrange
    const onAddTaskMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<AddTask onAddTask={onAddTaskMock} />);

    // Act
    const input = getByPlaceholderText('Nueva tarea');
    const button = getByText('Agregar tarea');
    fireEvent.changeText(input, 'Nueva tarea de prueba');
    fireEvent.press(button);

    // Assert
    expect(onAddTaskMock).toHaveBeenCalledWith('Nueva tarea de prueba');
  });
});
