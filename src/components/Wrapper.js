import React, { useState } from 'react';
import { Form } from './Form';
import { Todo } from './To-do'; // Correct import statement
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './Edit';

uuidv4();

export const Wrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    console.log(todos); // Note: State updates are asynchronous
  }
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

   const editTodoForm=(id)=>{
      setTodos(todos.map(todo=>todo.id === id? {...todo,isEditing :!todo.isEditing}:todo))
     
   }
   const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
 
  

   return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <Form addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodoForm={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodoForm={editTodoForm}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
