import { useQuery } from "react-query";
import axios from "axios";

export function useCommons() {
  return useQuery("getCommons", async () => {
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