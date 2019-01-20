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
        delimiter = string[2]
        string = string.substring(3)
    }
    const stringWithoutLineBreak: string = getStringWithoutLineBreak(string, delimiter)
    const numbers: number[] = splitNumbersWithHisDelimiter(stringWithoutLineBreak, delimiter)
    return numbers.reduce(reducer)
}