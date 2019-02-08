import { Stint } from './stint';

export class Session {
    constructor(public stints: Stint[]){}

    addStint(newStint: Stint){
        this.stints.push(newStint);
    }
}
