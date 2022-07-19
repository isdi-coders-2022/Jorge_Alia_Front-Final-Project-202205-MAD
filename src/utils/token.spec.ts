import { getId, getToken } from './token';

describe('Given the function get token is called', () => {
    test('them it return a string', () => {
        let result = getToken();
        expect(result).toBe(null);
    });
});

describe('Given the function get id is called', () => {
    test('them it return a string', () => {
        let result = getId();
        expect(result).toBe(null);
    });
});
