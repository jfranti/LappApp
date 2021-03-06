import { Lap, Outlap, Inlap } from './lap';

describe('Outlap', () => {
  it('should create an instance', () => {
    expect(new Outlap('0:0.0')).toBeTruthy();
  });
});

describe('Inlap', () => {
  it('should create an instance', () => {
    expect(new Inlap('0:0.00')).toBeTruthy();
  });
});

describe('Lap', () => {
  it('should create an instance', () => {
    expect(new Lap("1:29.100")).toBeTruthy();
  });

  it('should accept a lap time', () => {
    expect (new Lap("1:29.100")).toBeTruthy();
  })

  it('should not accept a string', () => {
    expect(new Lap("hello").timeInSeconds()).toEqual(0);
  })

  it('should convert a string of 1 second to seconds', () => {
    expect (new Lap('0:01.00').timeInSeconds()).toEqual(1);
  })

  it('should convert a string of 1 minute 1 second to seconds', () => {
    expect(new Lap('1:01.00').timeInSeconds()).toEqual(61);
  })

  it('should convert a string of 1 minute 1 second and 23 hundreths to seconds', () => {
    expect(new Lap('1:01.023').timeInSeconds()).toEqual(61.023);
  })

});
