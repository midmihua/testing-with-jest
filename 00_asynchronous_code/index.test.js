const { fetchData, fetchDataError, fetchDataErrorThrow } = require('./http');

describe('Asynchronous Code', () => {

    // test('Callbacks: the data is peanut butter', done => {
    //     function callback(data) {
    //         try {
    //             expect(data).toBe('peanut butter');
    //             done();
    //         } catch (error) {
    //             done(error);
    //         }
    //     }

    //     fetchData(callback);
    // });
});

describe('Promises', () => {

    test('Promises: delectus aut autem', () => {
        return fetchData().then(data => {
            expect(data.title).toBe('delectus aut autem');
        });
    });

    test('.resolves / .rejects: the data is peanut butter', () => {
        return expect(fetchData()).resolves.toEqual({ "completed": false, "id": 1, "title": "delectus aut autem", "userId": 1 });
    });

    test('the fetch fails with an error', () => {
        expect.assertions(1);
        return fetchDataError().catch(e => expect(e).toMatch('error'));
    });

    test('the fetch fails with an error', () => {
        return expect(fetchDataError()).rejects.toMatch('error');
    });

});

describe('Async/Await', () => {

    test('the data is delectus aut autem', async () => {
        const data = await fetchData();
        expect(data.title).toBe('delectus aut autem');
    });

    test('the fetch fails with an error', async () => {
        expect.assertions(1);
        try {
            await fetchDataError();
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

    test('the data is peanut butter', async () => {
        await expect(fetchData()).resolves.toEqual({ "completed": false, "id": 1, "title": "delectus aut autem", "userId": 1 });
    });

    test('the fetch fails with an error', async () => {
        await expect(fetchDataErrorThrow()).rejects.toThrow('error');
    });

});
