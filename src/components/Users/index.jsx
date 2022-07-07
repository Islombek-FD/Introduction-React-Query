import React from 'react';
import { useUsers } from '../../hooks/useUsers';

function Users() {
   const { isLoading, users } = useUsers();

   return (
      <div>
         {isLoading ? (
            <div>
               <strong className='fs-3'>...Loading</strong>
            </div>
         ) : users.length ? (
            <ul>
               {users.map(user => (
                  <li key={user.id}>
                     <h3>{user.name}</h3>
                     <p>{user.email}</p>
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