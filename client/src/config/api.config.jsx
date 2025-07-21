import axios from 'axios';

const ApiManager = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API_BASE,
    //baseURL:"/api",
    withCredentials: true,

});

export default ApiManager;