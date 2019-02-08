import { Stint } from './stint';

export class Session {
    public stints: Stint[];
    constructor(){}

    addStint(newStint: Stint){
        this.stints.push(newStint);
    }
}
