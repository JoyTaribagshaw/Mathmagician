import calculate from '../logic/calculate';

const calculateObj = {
  total: 0,
  next: null,
  operation: null,
};

describe('Test the function:', () => {
  test('Check if the AC button clears the UI to zero (0)', () => {
    expect(calculate(calculateObj, 'AC')).toEqual(calculateObj);
  });
  test('The = button along with the operation for performing the operation', () => {
    const calculateObjct = { total: 4, next: 9, operation: 'x' };
    const result = { operation: null, next: null, total: '36' };
    expect(calculate(calculateObjct, '=')).toEqual(result);
  });
  test('The . button', () => {
    const calculateObjct = { total: '0', next: '.5', operation: '+' };
    expect(calculate(calculateObjct, '.')).toEqual({ ...calculateObjct, next: '.5' });
  });
});

describe('Test of the operation changes if there is already an operation', () => {
  test('In case if the obj.next is missing', () => {
    const obj = { ...calculateObj, total: '50', operation: '-' };
    expect(calculate(obj, '+')).toEqual({ ...obj, operation: '+' });
  });
});