import axios from "axios";
const url='http://127.0.0.1:3002/books'

export const getBooks=()=>{
    try {
        return axios.get(url)
    } catch (error) {
       console.log(error.message); 
    }
   
}

export const addBooks=(data)=>{
    try {
        return axios.post(url,data)
    } catch (error) {
        console.log(error.message);
    }
}

export const editBooks=(data)=>{
    try {
        return axios.get(`${url}/${data}`)
    } catch (error) {
       console.log(error.message); 
    }
}

export const updateBooks=(data,id)=>{
    try {
        return axios.put(`${url}/${id}`,data)
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBooks=async(id)=>{
    try {
        return axios.delete(`${url}/${id}`)
    } catch (error) {
        console.log(error.message);
    }
}