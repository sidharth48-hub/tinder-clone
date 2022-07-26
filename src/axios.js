import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tindercloneproject.herokuapp.com/'
})

export default instance;