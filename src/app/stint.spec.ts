import { Stint } from './stint';
import { Outlap, Lap, Inlap } from './lap';

describe('Stint', () => {

    let newStint;
  beforeEach(() => {
    newStint = new Stint("hard", 12);
    newStint.addOutlap(new Outlap("1:30.000"));
    newStint.addLap(new Lap("0:59.00"));
    newStint.addLap(new Lap("1:01.00"));
    newStint.addLap(new Lap("1:00.00"));
    newStint.addInlap(new Inlap("1:23.000"));
  })

  it('should create an instance', () => {
    expect(newStint).toBeTruthy();
  });
  it('should fill in laps', () => {
    expect(newStint.getAverageLaptime()).toEqual(60);
  });
  it('should report total stint time in seconds', () => {
    expect(newStint.getTotalTimeInSeconds()).toEqual(353);
  });
  it('should report total stint time in a string format', () => {
    expect(newStint.getTotalTimeInString()).toEqual("5:53");
  });
  it('should report total stint time in a string format', () => {
    newStint.addLap(new Lap("1:00.233"));
    expect(newStint.getTotalTimeInString()).toEqual("6:53.233");
  });
  it('should report total stint time in a string format for a shorter string', () => {
    newStint.addLap(new Lap("1:00.23"));
    expect(newStint.getTotalTimeInString()).toEqual("6:53.23");
  });
  it('should report fuel used', () => {
    newStint.setStartingFuel(35);
    newStint.setEndingFuel(21.3);
    expect(newStint.getTotalFuelUsed()).toEqual(13.7);
  });
  it('should report fuel used per lap', () => {
    newStint.setStartingFuel(35);
    newStint.setEndingFuel(21.3);
    expect(newStint.getAverageFuelBurn()).toEqual(2.28);
  });
  it('should report tire wear rate', () => {
    newStint.setEndingTire(94);
    expect(newStint.getTireWearRate()).toEqual(1);
  })
  
  
});
