import React,{useState} from 'react'

export const EditTodoForm = ({editTodoForm, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
   
      e.preventDefault();
     
      editTodoForm(value,task.id);
  
    };
   
  
  return (

    <form className='TodoForm'onSubmit={handleSubmit} >
   <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder="Update Task" />

   <button type='submit' className='todo-btn'> Update Task</button>
    </form>
  )
}
