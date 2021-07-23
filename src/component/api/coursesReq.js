import React from 'react';
import axios from 'axios'
export  async function getCourses(){
    const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
    return res;
};