import { Stint } from './stint';
import { Race } from './race';
import { RaceStrategy } from './race-strategy';

export class Session {

    public stints: Stint[] = [];
    public testedTires: string[] = [];
    constructor(public race: Race, public fuelCapacity: number){}

    addStint(newStint: Stint){
        this.stints.push(newStint);
    }

    compileTires() {
        this.testedTires = [];
        for (let stint of this.stints) {
            if (this.testedTires.indexOf(stint.tire) == -1) {                
                this.testedTires.push(stint.tire);
            }
        }
    }

    findStintByTire(tire: string) {
        let selectedStints: Stint[] = [];
        for (let stint of this.stints) {
            if (stint.tire === tire) {
                selectedStints.push(stint);
            }
        }
        return selectedStints;
    }

//go thru each stint with matching tires and find the optimal length of stint with computed fuel load and tire life
    computeStrategies(time = this.race.time) {
        let finalStrategy = new RaceStrategy();
        this.compileTires();
        for(let tire of this.testedTires) {   
            let raceTime = time;
            let maxStint;
            let overrun;
            let raceStrategy = new RaceStrategy();         
            let relevantStints: Stint[] = this.findStintByTire(tire);
            for(let stint of relevantStints) {                
                maxStint = stint.findMaximumStint(this.fuelCapacity);
                console.log("number of max stints: " + this.race.time/maxStint.time);
            }
            while(raceTime>maxStint.time*.9)
            {
                raceStrategy.raceStints.push(maxStint)
                raceTime -= maxStint.time;
                if(raceTime<-60) {
                    overrun = raceTime;
                }
                console.log(raceTime);
            }
            if(finalStrategy.totalTime() == 0 || raceStrategy.totalTime() < finalStrategy.totalTime()) {
                finalStrategy = raceStrategy;
            }
        }
        return finalStrategy;
    }
}
