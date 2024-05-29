import axios from 'axios';

// Create an instance of axios with a custom config
const instance = axios.create({
  baseURL: 'http://34.227.92.112:8000/api',
  // You can add more custom config here if needed
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Log the URL being hit before the request is made
  console.log('Request URL:', config.baseURL + config.url);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default instance;
