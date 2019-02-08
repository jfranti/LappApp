import { Lap, Outlap, Inlap } from './lap';

export class Stint {
    
    public laps: Lap[] = [];
    public outlaps: Outlap[] = []; 
    public inlaps: Inlap[] = [];
    public startingFuel: number;
    public endingFuel: number;

    constructor(public tire: string, public fuel: number = 0){}

    addLap(newLap: Lap) {
        this.laps.push(newLap);
    }

    addOutlap(newOutlap: Outlap) {
        this.outlaps.push(newOutlap);
    }

    addInlap(newInlap: Inlap) {
        this.inlaps.push(newInlap);
    }

    getTotalTimeInSeconds()
    {
        let totalStintTime: number = 0;
        for (let lap of this.laps) {
            totalStintTime += lap.timeInSeconds();
        }
        for (let lap of this.outlaps) {
            totalStintTime += lap.timeInSeconds();
        }
        for (let lap of this.inlaps) {
            totalStintTime += lap.timeInSeconds();
        }
        return totalStintTime;
    }

    getTotalTimeInString()
    {
        let totalStintTime = this.getTotalTimeInSeconds();
        let minutes = Math.floor(totalStintTime / 60);
        let seconds = Math.round((totalStintTime % 60) * 1000) / 1000;

        return minutes.toString() + ":" + seconds.toString();

    }



    getAverageLaptime() {
        let totalLaptime: number = 0;
        for(let lap of this.laps) {
            totalLaptime += lap.timeInSeconds();
        }
        return totalLaptime/this.laps.length;
    }
}
