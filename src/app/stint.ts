import { Lap, Outlap, Inlap } from './lap';
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';

export class Stint {
    
    public laps: Lap[] = [];
    public outlaps: Outlap[] = []; 
    public inlaps: Inlap[] = [];
    public startingFuel: number;
    public endingFuel: number;

    constructor(public tire: string, public fuel: number = 0) {
        this.startingFuel = fuel;
    }

    setStartingFuel(fuel: number) {
        this.startingFuel = fuel;
    }

    setEndingFuel(fuel: number) {
        this.endingFuel = fuel;
    }

    getTotalFuelUsed() {
        return this.startingFuel-this.endingFuel;
    }

    getAverageFuelBurn() {
        let lapCount = this.laps.length + this.inlaps.length + this.outlaps.length + 1;
        return Math.round((this.getTotalFuelUsed() / lapCount) * 100) / 100;
    }

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
