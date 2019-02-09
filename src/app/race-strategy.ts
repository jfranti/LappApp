import { RaceStint } from './race-stint';

export class RaceStrategy {
    public raceStints: RaceStint[] = [];

    totalTime() {
        let time = 0;
        for(let stint of this.raceStints) {
            time += stint.time;
        }
        return time;
    }
}
