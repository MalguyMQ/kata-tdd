//KATA TDD 1 - http://osherove.com/tdd-kata-1/

import {add} from "../src/stringcalculator";

describe('Add()', () => {
    test('Should render sum of params', () => {
        expect(add('')).toBe(0)
        expect(add('1')).toBe(1)
        expect(add('1,2')).toBe(3)
    })
    test('Should remove line break', () => {
        expect(add('1\n2,3')).toBe(6)
    })
    test('Should detect delimiter', () => {
        expect(add('//;\n1;2')).toBe(3)
    })
    test('Should throw error if number is negative', () => {
        expect(() => {
            add('//;\n-1;2')
        }).toThrow(Error);
    })
    test('Should ignore number > to 1000', () => {
        expect(add('//;\n100;2;1001')).toBe(102)
    })
    test('Delimiter should have any length', () => {
        expect(add('//^^^\n100^^^2^^^1001')).toBe(102)
    })
})