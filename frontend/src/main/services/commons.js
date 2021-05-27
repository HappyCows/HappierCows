import axios from "axios";

export function createCommons(newCommons){
    axios.post('/api/commons/new',newCommons);
}