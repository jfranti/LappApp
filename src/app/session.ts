import { Stint } from './stint';
import { Race } from './race';

export class Session {

    public stints: Stint[] = [];
    public testedTires: string[] = [];
    public fuelCapacity: number;
    constructor(public race: Race){}

    addStint(newStint: Stint){
        this.stints.push(newStint);
    }

    compileTires() {
        this.testedTires = [];
        for (let tire of this.testedTires) {
            for (let stint of this.stints) {
                if (this.testedTires.indexOf(stint.tire) != -1) {
                    this.testedTires.push(stint.tire);
                }
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

    findMaximumStint(testStints: Stint[]) {

    }

    computeStrategies() {
        this.compileTires();
        let strategies = {};
        for(let tire of this.testedTires) {
            let relevantStints: Stint[] = this.findStintByTire(tire);
            for(let stint of relevantStints) {
                let avglap = stint.getAverageLaptime();
                let avgfuel = stint.getAverageFuelBurn();
                let avgtire = stint.getTireWearRate();
                
            }
        }
    }
}
