import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

export class Lap {
    constructor(public lapTimeString: string){this.validateInput();}

    validateInput(){
        try {
            if (!parseFloat(this.lapTimeString.match(/.+?(?=:)/).toString()) || !parseFloat(this.lapTimeString.match(/(?<=:).*/).toString())) {
                return false;
            }
            return true;
        } catch (error) {
            this.lapTimeString = "0:0.0";
        }
    }

    timeInSeconds(){    
        return (parseFloat(this.lapTimeString.match(/.+?(?=:)/).toString())*60)+parseFloat(this.lapTimeString.match(/(?<=:).*/).toString());
    }
}
