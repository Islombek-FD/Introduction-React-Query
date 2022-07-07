export const UsersServices = {
   async getAll() {
      return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
   }
}