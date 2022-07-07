import { useQuery } from "react-query";
import { UsersServices } from "../services/users.services";

export const useUsers = () => {
   const { isLoading, data: users } = useQuery('Users', () => UsersServices.getAll(), {
      onError: (error) => {
         console.log(error.message);
      },
      select: (data) => data.map(user => ({
         ...user,
         name: user.name + ' developer'
      }))
   });

   return { isLoading, users }
}