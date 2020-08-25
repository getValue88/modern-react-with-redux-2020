import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID sq8d2pDQDZvMykxv-Sa27l-NEOP4eJ756kf6R-zKwuU'
    }
});