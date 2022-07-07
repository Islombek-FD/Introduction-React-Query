import { useQuery } from "react-query";
import { UserServices } from "../services/user.services";

export const useUsers = () => {
   const { isLoading, data: users } = useQuery('Users', () => UserServices.getAll(), {
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