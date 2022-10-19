import axios from 'axios';
import { config } from '../config/default';

export const api = axios.create({
    baseURL: `${config.URL}:${config.PORT}`,
})