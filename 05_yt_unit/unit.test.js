const { generateText } = require('./util');

describe('Unit: generateText', () => {

    test('should output name and age', () => {
        const result = generateText('Dmytro', 35);
        expect(result).toBe('Dmytro is 35 years old');
    });
});
