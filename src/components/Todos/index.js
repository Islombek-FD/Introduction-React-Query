import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todos() {
   return (
      <div className='container py-5'>
         <div className="col-4 offset-4">
            <TodoForm />

            <TodoList />
         </div>
      </div>
   )
}

export default Todos;