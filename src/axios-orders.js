import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-dd7c3.firebaseio.com/',
});

export default instance;
