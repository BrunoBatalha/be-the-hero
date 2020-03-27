import config from '../../config';

import axios from 'axios';

const api = axios.create({
    baseURL: config.BASE_URL+':3333'
})
export default api;