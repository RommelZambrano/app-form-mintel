import axios from 'axios';

const formApi = axios.create({
    baseURL: 'http://localhost:8000/form/api/v1/form/',
})

export const getForm =  () =>   formApi.get('/');


export const postForm =  (data) =>  formApi.post('/', data);
