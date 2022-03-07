import axios from 'axios';
import { URL } from '../config/constants';

export const api = axios.create({baseURL: URL});

export const getAllPokemons = () => api.get('/pokemons');
