const axios = require('axios');

const fetchData = () => {
    console.log('axios api is used...');
    return axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            return response.data;
        });
};

const fetchDataError = () => {
    return Promise.reject('error');
};

const fetchDataErrorThrow = () => {
    return Promise.reject(new Error('error'));
};

module.exports = {
    fetchData,
    fetchDataError,
    fetchDataErrorThrow
};

