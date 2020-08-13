import axios from 'axios';

export default axios.create({
    baseURL: 'http://home.resonanant.com/api/v1',
    headers: {
        'Content-type': 'application/json'
    }
});
