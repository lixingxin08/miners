import axios from 'axios'
// import { domain } from './api_config'
//解决跨域
// axios.defaults.baseURL = process.env.NODE_ENV === 'production' ?'http://144.48.240.112:8881':'';
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ?'':'';
// axios.defaults.withCredentials = true;
axios.defaults.allowCredentials = true
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';


export default axios;
