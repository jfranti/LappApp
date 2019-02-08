import { Lap, Outlap, Inlap } from './lap';

export class Stint {
    constructor(public tire: string, public fuel: number = 0){}

    public laps: Lap[];
    public outlaps: Outlap[]; 
    public inlaps: Inlap[];

    addLap(newLap: Lap) {
        this.laps.push(newLap);
    }

    addOutlap(newOutlap: Outlap) {
        this.outlaps.push(newOutlap);
    }

    addInlap(newInlap: Inlap) {
        this.inlaps.push(newInlap);
    }

    getAverageLaptime() {
        let laptimes: number[];
        for(let lap in this.laps) {
            console.log(lap);
        }
    }
}
