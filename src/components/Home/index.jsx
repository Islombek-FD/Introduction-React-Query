import React from 'react';

function Home() {
   return (
      <div className='container'>
         <div className="row">
            <div className="col-6 offset-3">
               <h1>Create user</h1>

               <form>
                  <div className='mb-3'>
                     <label className='form-label'>Name</label>
                     <input className='form-control' type="text" />
                  </div>

                  <div className='mb-3'>
                     <label className='form-label'>Username</label>
                     <input className='form-control' type="text" />
                  </div>

                  <div className='mb-3'>
                     <label className='form-label'>Email</label>
                     <input className='form-control' type="email" />
                  </div>

                  <input type="submit" value='Create user' />
               </form>
            </div>
         </div>
      </div >
   )
}

export default Home;