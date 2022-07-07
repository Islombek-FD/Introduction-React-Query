import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { UsersServices } from '../../services/users.services';

function Users() {
   const [users, setUsers] = useState([]);
   const { isLoading } = useQuery('Users', () => UsersServices.getAll(), {
      onSuccess: (data) => {
         setUsers(data);
      },
      onError: (error) => {
         console.log(error.message);
      },
      select: (data) => data.map(user => ({
         ...user,
         name: user.name + ' developer'
      }))
   });

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
            <div></div>
         )}
      </div>
   )
}

export default Users;