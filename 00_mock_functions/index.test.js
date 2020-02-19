function customForEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

describe('Using a mock function', () => {

    test('mock function with fn', () => {
        const mockCb = jest.fn(x => x ** 2);
        customForEach([1, 2, 3], mockCb);

        expect(mockCb.mock.calls.length).toBe(3);
        expect(mockCb.mock.calls[0][0]).toBe(1);
        // expect(mockCb.mock.calls[1][0]).toBe(4);
        expect(mockCb.mock.results[2].value).toBe(9);
    });
});

describe('Mock Return Values', () => {

    test('mockFn', () => {
        const mockFn = jest.fn();
        mockFn
            .mockReturnValueOnce(1)
            .mockReturnValueOnce('a')
            .mockReturnValue(true);
        console.log(mockFn(), mockFn(), mockFn(), mockFn(), mockFn());
    });

    test('filterTestFn', () => {
        const filterTestFn = jest.fn();
        filterTestFn
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false);
        const results = [1, 2].filter(n => filterTestFn(n));
        console.log(results);
    });
});


describe('Mocking Modules', () => {

    const axios = require('axios');
    const { User } = require('./users');
    
    jest.mock('axios');

    test('should mock axios api', async () => {
        const users = [{ name: 'Bob' }];
        const resp = { data: users };
        axios.get.mockResolvedValue(resp);

        return User.all().then(data => console.log(data));
    });
});
