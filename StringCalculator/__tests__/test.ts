//KATA TDD 1 - http://osherove.com/tdd-kata-1/

const reducer = (accumulator: number, currentValue: number): number => accumulator + currentValue
const throwError = (message: string): any => {
    throw Error(message)
}
const hasDelimiter = (string: string): boolean => string[0] === '/' && string[1] === '/'
const splitNumbersWithHisDelimiter = (stringWithoutLineBreak: string, delimiter: string): any => {
    return stringWithoutLineBreak
        .split(delimiter)
        .map((number: string): any => Number(number) < 0 ?
            throwError('negatives not allowed')
            : Number(number) > 1000 ? 0 : Number(number))
}
const getStringWithoutLineBreak = (string: string, delimiter: string): string => string.replace(/\n/g, delimiter)

export function add(string: string): number {
    let delimiter: string = ','
    if (string.length === 0) return 0
    if (hasDelimiter(string)) {
        delimiter = string[2];
        string = string.substring(3)
    }
    const stringWithoutLineBreak: string = getStringWithoutLineBreak(string, delimiter)
    const numbers = splitNumbersWithHisDelimiter(stringWithoutLineBreak, delimiter)
    return numbers.reduce(reducer)
}

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
    test('Should throw error if numbers is negative', () => {
        expect(() => {
            add('//;\n-1;2')
        }).toThrow(Error);
    })
    test('Should ignore number > to 1000', () => {
        expect(add('//;\n100;2;1001')).toBe(102)
    })
    test('Delimiter should be any length', () => {
        expect(add('//^^^\n100^^^2^^^1001')).toBe(102)
    })
    test('Should handle multiple delimiter', () => {
        // TODO: Handle this
        expect(add('//[*][%]\n1*2%3')).toBe(6)
    })
})