import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Bizim springin portu bu
});

export const getHomeData = () => api.get('/');
