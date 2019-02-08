import { Session } from './session';
import { Race } from './race';

describe('Session', () => {
  it('should create an instance', () => {
    expect(new Session(new Race("Brno", 90))).toBeTruthy();
  });
});
