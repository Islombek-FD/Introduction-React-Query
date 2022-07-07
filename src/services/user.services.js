const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const UserServices = {
   async getAll() {
      return fetch(BASE_URL + 'users').then(res => res.json());
   },

   async getById(id) {
      return fetch(BASE_URL + `users/${id}`).then(res => res.json());
   },

   async create(data) {
      return fetch(BASE_URL + '', {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(data)
      }).then(res => res.json());
   }
}