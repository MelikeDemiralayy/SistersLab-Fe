import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';
//baseURl tanımlamamızın nedeni daha dinamik olmasını sağlamak.

const axiosInstance = axios.create({  //axiosInstance {/character} şeklinde istek atmamızı kolaylaştırır.
    baseURL,
  });
  
  export const fetchCharacters = async () => {
    const response = await axiosInstance.get('/character');
    return response.data.results;
  };