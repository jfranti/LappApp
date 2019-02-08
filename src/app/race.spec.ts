import { Race } from './race';

describe('Race', () => {
  let testRace: Race;
  beforeEach(() => {
    testRace = new Race("Brno", 90);
  })
  it('should create an instance', () => {
    expect(testRace).toBeTruthy();
  });
  it('should return expected laps for Brno', () => {
    expect(testRace.getEstimatedLaps(120)).toEqual(45);
  })
});
