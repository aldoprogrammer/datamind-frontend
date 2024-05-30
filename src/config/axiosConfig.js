import axios from 'axios';

// Dynamically set the base URL with the correct protocol
const protocol = window.location.protocol;
const baseUrl = `${protocol}//34.227.92.112:8000/api`;

// Create an instance of axios with the dynamic base URL
const instance = axios.create({
  baseURL: baseUrl,
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
