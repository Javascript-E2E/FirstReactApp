const sum= require('../src/app/sum')

//test('testing test case',() => {
//    expect(sum(1, 2).toBe(3));
//});

describe('testing sum', function() {
  it('adds numbers', function() {
    expect(sum(1, 2)).toBe(3);
  });
});