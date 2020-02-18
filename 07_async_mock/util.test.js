// jest.mock('./http');

const { loadTitle } = require('./util');

describe('Async testing', () => {

    test('loadTitle', () => {
        loadTitle().then(title => {
            expect(title).toBe('DELECTUS AUT AUTEM');
        });
    });
});
