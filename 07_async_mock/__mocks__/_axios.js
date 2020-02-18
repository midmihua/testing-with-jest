const get = (url) => {
    
    console.log('axios mocked get');

    return Promise.resolve({
        data: {
            title: 'delectus aut autem'
        }
    });
};

module.exports = {
    get
};
