import React from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { PostService } from '../../services/post.services';

function Posts() {
   const queryClient = useQueryClient();
   const { isLoading, data } = useQuery('posts', () => PostService.getPosts(), {
      onError: (error) => {
         console.log(error.message);
      },
   });

   const addTodoMutation = useMutation(PostService.addPost, {
      onSuccess: () => {
         queryClient.invalidateQueries('posts')
      }
   });

   const updateTodoMutation = useMutation(PostService.updatePost, {
      onSuccess: () => {
         queryClient.invalidateQueries('posts')
      }
   });

   const deleteTodoMutation = useMutation(PostService.deletePost, {
      onSuccess: () => {
         queryClient.invalidateQueries('posts')
      }
   });

   const clickHandler = (e) => {
      e.preventDefault();

      addTodoMutation.mutate({
         id: 20,
         title: 'Add new post',
         body: 'Add new post by react query mutation',
         userId: 20,
      });
   }

   return (
      <div className='container py-5'>
         <div className='mb-'>
            <button onClick={clickHandler} className='btn btn-success'>Add post</button>
         </div>

         {isLoading
            ? (
               <div className='position-absolute top-50 start-50'>
                  <span className='fs-1 text-success'>Loading ...</span>
               </div>
            )
            : data?.data?.length ? (
               <ul className='list-unstyled d-flex flex-column gap-3'>
                  {
                     data.data.map(post => (
                        <li key={post.id}>
                           <div className="card">
                              <div className="card-header">
                                 <h3>{post.title}</h3>
                                 <p>{post.body}</p>
                              </div>
                           </div>
                        </li>
                     ))
                  }
               </ul>
            )
               : (
                  <div>
                     <span className='text-danger'>No posts!</span>
                  </div>
               )
         }
      </div >
   )
}

export default Posts;