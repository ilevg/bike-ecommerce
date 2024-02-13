import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000', // Установите ваш базовый URL
  timeout: 5000, // Установите таймаут запроса (в миллисекундах)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
