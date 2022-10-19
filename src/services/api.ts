import axios from 'axios';
import { config } from '../config/default';

const api = axios.create({
    baseURL: `${config.URL}:${config.PORT}`,
})

export default api;