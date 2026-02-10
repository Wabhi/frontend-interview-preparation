import {add,subtract,divide,multiply,isEven,isPalindrome} from '../utils/math'

describe('I want to test math utilites functions 1',()=>{

    test('add to numbers a and b',()=>{
        expect(add(10,9)).toBe(19)
        expect(add(0,0)).toBe(0)
    })
    
    test('substract to numbers a and b',()=>{
        expect(subtract(10,4)).toBe(6)
        expect(subtract(8,12)).toBe(-4)
    })
})

describe('I want to test math utilites functions 2',()=>{
    test('multiply to numbers a and b',()=>{
        expect(multiply(10,9)).toBe(90)
        expect(multiply(0,0)).toBe(0)
    })
    
    test('devide to numbers a and b',()=>{
        expect(divide(16,4)).toBe(4)
        expect(divide(100,10)).toBe(10)
    })

    test('throws error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
      expect(() => divide(10, 0)).toThrow(Error);
    });
})

describe('Test number is even or add', () => {
    test('returns true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    test('returns false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(7)).toBe(false);
      expect(isEven(-3)).toBe(false);
    });
})

 describe('Test string is Palindromeor not', () => {
    it('identifies palindromes correctly', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(isPalindrome('Was it a car or a cat I saw')).toBe(true);
    });

    it('identifies non-palindromes correctly', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('testing')).toBe(false);
    });
  });