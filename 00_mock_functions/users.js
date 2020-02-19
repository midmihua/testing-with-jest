const axios = require('axios');

class User {

    static all() {
        console.log('axios get all');
        return axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.data);
    }
}

module.exports = {
    User
};
