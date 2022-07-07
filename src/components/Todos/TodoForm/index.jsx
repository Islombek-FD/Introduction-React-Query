import React from 'react';

function TodoForm() {
   return (
      <div className='card mb-4'>
         <div className="card-header">
            <h3>Add new todo</h3>
         </div>

         <div className="card-body">
            <form>
               <div className="mb-3">
                  <label className="form-label">Job name</label>
                  <input className="form-control" type="text" />
               </div>

               <button className='btn btn-primary'>Add todo</button>
            </form>
         </div>
      </div>
   )
}

export default TodoForm;