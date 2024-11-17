import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3400/shopping', // Ajusta el puerto si es necesario
});

export default api;
