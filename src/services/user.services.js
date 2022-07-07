const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const UserServices = {
   async getAll() {
      return fetch(BASE_URL + 'users').then(res => res.json());
   },

   async getUserById(id) {
      return fetch(BASE_URL + `users/${id}`).then(res => res.json());
   }
}