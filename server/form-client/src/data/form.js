import axios from 'axios';

const formApi = axios.create({
    baseURL: 'http://localhost:8000/form/get-data/',
})



export const getOperator = async (ruc) => {
    try {
      const response = await formApi.get(`?ruc=${ruc}`);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.error("Error al buscar operador:", error);
      throw error;
    }
  };


export const postForm =  (data) =>  formApi.post('/', data);
