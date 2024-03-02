'use server'
import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';
const apikey = process.env.API_KEY

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': apikey,
    },
  });
    
  return data;
}

