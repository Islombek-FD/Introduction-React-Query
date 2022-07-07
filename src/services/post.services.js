import api from '../api';

export const PostService = {
   async getPosts() {
      return api.get('posts');
   },

   async addPost(data) {
      return api.post('posts', data, {
         'Content-type': 'application/json; charset=UTF-8',
      });
   },

   async deletePost(postId) {
      return api.delete(`posts/${postId}`, {
         method: 'DELETE'
      })
   },

   async updatePost(postId, data) {
      return api.put(`posts/${postId}`, data, {
         'Content-type': 'application/json; charset=UTF-8',
      })
   }
}  