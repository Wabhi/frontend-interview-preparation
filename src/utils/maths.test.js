import {add,substract} from "../utils/maths"

// test('add 2 and 3 equal to 5',()=>{
//     const result = add(2,3)
//     expect(result).toBe(5)
// })

// test('add 2 and 3 equal to 5',()=>{
//     const result = add(12,23)
//     expect(result).toBe(35)
// })

// test('handles negative numbers', () => {
//   expect(add(-1, -2)).toBe(-3);
// });

// test('handles decimal numbers', () => {
//   expect(add(0.1, 0.2)).toBeCloseTo(0.3); // Use toBeCloseTo for decimals
// });

// test('handles string numbers by converting them', () => {
//   // This would fail if add doesn't handle strings
//   expect(add('1', '2')).toBe(3);
// });

describe('I want to test math modules',()=>{
    test('add two numbers',()=>{
        expect(add(10,20)).toBe(30)
    })
    test('substract two numbers',()=>{
        expect(substract(20,10)).toBe(10)
    })
})

//toBe used for mostly premitive data type if you check with array/object then it would be fail.
test('toBe examples',()=>{
    expect(2+2).toBe(4)
    expect(null).toBe(null)
    expect(undefined).toBe(undefined)
    expect('hello').toBe('hello')
    // expect({name:'abhishek'}).toBe({name:'abhishek'}) 
})

//toEqual used for mostly array and object.
test('toEqual examples',()=>{
    expect({name:'abhishek'}).toEqual({name:'abhishek'}) 
    expect([1,2,4,5]).toEqual([1,2,4,5])
    expect({name:'abhishek',email:'abhi@gmail.com',phone:[3536363,38384848]}).toEqual({name:'abhishek',email:'abhi@gmail.com',phone:[3536363,38384848]})
})

//truthiness matchers
test('truthiness', () => {
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect('hello').toBeDefined();
  
  // Truthy/Falsy
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect('text').toBeTruthy();
});

//number matchers
test('number matchers', () => {
  expect(4).toBeGreaterThan(3);
  expect(2).toBeLessThan(5);
  expect(5).toBeGreaterThanOrEqual(5);
  expect(3).toBeLessThanOrEqual(3);
  
  // Floating point - USE toBeCloseTo
  expect(0.1 + 0.2).toBeCloseTo(0.3); // ✅
//   expect(0.1 + 0.2).toBe(0.3); // ❌ Fails due to floating point precision
});

//array/object matchers
test('array matchers', () => {
  const fruits = ['apple', 'banana', 'orange'];
  
  expect(fruits).toContain('banana');
  expect(fruits).toHaveLength(3);
  expect(fruits).toEqual(expect.arrayContaining(['apple', 'orange']));
});

test('object matchers', () => {
  const user = { id: 1, name: 'John', email: 'john@test.com' };
  
  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('name', 'John');
  expect(user).toMatchObject({ name: 'John' }); // Partial match
  
  // Check if object has specific structure
  expect(user).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      id: expect.any(Number)
    })
  );
});

function throwError() {
  throw new Error('Something went wrong');
}

test('exception matchers', () => {
  expect(() => throwError()).toThrow();
  expect(() => throwError()).toThrow('Something went wrong');
  expect(() => throwError()).toThrow(/went wrong/);
  expect(() => throwError()).toThrow(Error);
});