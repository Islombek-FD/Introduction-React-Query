import React from 'react';
import { useNavigate } from 'react-router';
import { useUsers } from '../../hooks/useUsers';

function Users() {
   const navigate = useNavigate();
   const { isLoading, users } = useUsers();

   return (
      <div className='container my-5'>
         {isLoading ? (
            <div>
               <strong className='fs-3'>...Loading</strong>
            </div>
         ) : users.length ? (
            <ul className='w-50 mx-auto'>
               {users.map(user => (
                  <li onClick={() => navigate(`/user/${user.id}`)} className='list-unstyled mb-3' key={user.id}>
                     <div className="card">
                        <div className="card-header">
                           <h3>{user.name}</h3>
                        </div>
                        <div className="card-body">
                           <p>{user.email}</p>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         ) : (
            <div>
               <strong className='text-danger'>No users!</strong>
            </div>
         )}
      </div>
   )
}

export default Users;