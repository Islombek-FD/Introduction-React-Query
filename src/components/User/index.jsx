import React from 'react';
import { useParams } from 'react-router';
import { useUser } from '../../hooks/useUser';

function User() {
   const { userId } = useParams();
   const { isLoading, user } = useUser(userId);

   return (
      <div className='container'>
         {isLoading ? (
            <div>
               <strong>...Loading</strong>
            </div>
         ) : (
            <div className='card'>
               <div className="card-header">
                  <h3>{user.name}</h3>
               </div>

               <div className="card-body">
                  <span>{user.email}</span>
               </div>
            </div>
         )}
      </div>
   )
}

export default User;