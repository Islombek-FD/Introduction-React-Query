import { useQuery } from "react-query";
import { UserServices } from '../services/user.services';

export const useUser = (id) => {
   const { isLoading, data: user } = useQuery('User by id', () => UserServices.getUserById(id), {
      onError: (error) => {
         console.log(error);
      },
      select: (data) => ({
         ...data,
         name: data.name + ' frontend developer'
      })
   });

   return { isLoading, user }
}