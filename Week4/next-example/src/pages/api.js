import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({
  baseURL,
});
// Tüm dataları almak için
export const fetchPhotos = async () => {
  const response = await axiosInstance.get("/photos");
  return response.data;
};
//id sine göre tek photoyu almak için
export const fetchPhoto = async (id) => {
  const response = await axiosInstance.get(`/photos/${id}`); //dinamik olan api istekleri bu şekilde yazılır.
  return response.data;
};