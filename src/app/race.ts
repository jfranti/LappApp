export class Race {
    public laps: number;
    public time: number; //race length in seconds

    constructor(public track: string, public timeInMinutes: number) {
        this.time = timeInMinutes*60;
    }

    getEstimatedLaps(myAverageLapTimeInSeconds: number) {
        return Math.ceil(this.time/myAverageLapTimeInSeconds);
    }
}
