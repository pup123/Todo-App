import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


export const Todo = ({ task,toggleComplete,deleteTodo,editTodoForm }) => { // Receive `task` prop instead of `tasks`
  return (
    <div className="Todo">
      {/* <div key={task.id}> Ensure to add a unique key for each todo */}
        <p onClick={()=>{toggleComplete(task.id)}} className={`${task.completed ? "completed" : ""}`}>{task.task}</p> {/* Access `task` property directly */}
        <div>
          <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodoForm(task.id)} />
          <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />        </div>
      </div>
   
  );
};
