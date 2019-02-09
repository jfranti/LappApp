import { Session } from './session';
import { Race } from './race';
import { Stint } from './stint';
import { Lap, Outlap, Inlap } from './lap';

describe('Session', () => {

  let newStint;
  beforeEach(() => {
    newStint = new Stint("hard");
    newStint.addOutlap(new Outlap("1:30.000"));
    newStint.addLap(new Lap("0:59.00"));
    newStint.addLap(new Lap("1:01.00"));
    newStint.addLap(new Lap("1:00.00"));
    newStint.addInlap(new Inlap("1:23.000"));
    newStint.setStartingFuel(20);
    newStint.setEndingFuel(8);
    newStint.setEndingTire(78);
    newStint.addLap(new Lap("1:57"));
  })

  it('should create an instance', () => {
    expect(new Session(new Race("Brno", 90), 45)).toBeTruthy();
  });
  it('should evaluate a max stint', () => {
    let thisSession = new Session(new Race("Brno", 90), 45);
    console.log(newStint);
    thisSession.addStint(newStint);
    console.log(thisSession);
    
    let test = thisSession.computeStrategies();
    expect(test).toBeTruthy();
  });

});
