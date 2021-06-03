import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

export function useCommons() {
  return useQuery("commons", async () => {
    const uri = "/api/commons";
    try {
      const response = await axios.get(uri);      
      return response.data ;
    } catch (e) {
      console.error(`Error getting data from ${uri}:`,e);
      return [];
    }
  }, {
    initialData: []
  });
}

export function useJoinCommons() {
  const queryClient = useQueryClient();
  return useMutation( async (id) => {
    const uri = "/api/commons/join/" + id;
    try {
      const response = await axios.post(uri);   
      return response.data ;
    } catch (e) {
      console.error(`Error postting data to ${uri}:`,e);
      return [];
    }
  }, {onSuccess: () => {
        queryClient.invalidateQueries('current user')
    }
  });
}