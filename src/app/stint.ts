import { Lap, Outlap, Inlap } from './lap';
import { RaceStint } from './race-stint';

export class Stint {
    
    public laps: Lap[] = [];
    public outlaps: Outlap[] = []; 
    public inlaps: Inlap[] = [];
    public startingFuel: number;
    public endingFuel: number;
    public startingTire: number = 100;
    public endingTire: number;

    constructor(public tire: string) {}

    findMaximumStint(fuelCapacity: number) {
        let avglap = this.getAverageLaptime();
        let avgfuel = this.getAverageFuelBurn();
        let avgtire = this.getTireWearRate();
        let laps = 0;
        let fuel = 0;
        let tire = this.tire;
        let maxLapsTire = Math.floor(90/avgtire);
        let maxLapsFuel = Math.floor((fuelCapacity-avgfuel)/avgfuel);
        while(laps < maxLapsFuel && laps < maxLapsTire) {
            laps += 1;
            fuel += avgfuel;            
        }
        let time = laps * avglap;
        return new RaceStint(laps, Math.ceil(fuel), tire, time);
    }


    setStartingFuel(fuel: number) {
        this.startingFuel = fuel;
    }

    setEndingFuel(fuel: number) {
        this.endingFuel = fuel;
    }

    setEndingTire(newTire: number) {
        this.endingTire = newTire;
    }

    getTireWearRate() {
        let lapCount = this.laps.length + this.inlaps.length + this.outlaps.length + 1;
        return ((this.startingTire - this.endingTire) / lapCount);
    }

    getTotalFuelUsed() {
        return this.startingFuel-this.endingFuel;
    }

    getAverageFuelBurn() {
        let lapCount = this.laps.length + this.inlaps.length + this.outlaps.length + 1;
        return Math.round((this.getTotalFuelUsed() / lapCount)*100)/100;
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
