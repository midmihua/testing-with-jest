const axios = require('axios');

const fetchData = () => {
    console.log('axios api is used...');
    return axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            return response.data;
        });
};

module.exports.fetchData = fetchData;
