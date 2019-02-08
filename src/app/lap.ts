export class Lap {
    constructor(public lapTimeString: string){}

    timeInSeconds(){
        let minutes;
        let seconds;
        minutes = parseFloat(this.lapTimeString.match(/.+?(?=:)/).toString()); 
        seconds = parseFloat(this.lapTimeString.match(/(?<=:).*/).toString()); 

        console.log("seconds raw: " + this.lapTimeString.match(/(?<=:).*/));
        console.log("minutes: " + minutes);
        console.log("seconds: " + seconds);
        
        
        let totalTime = parseFloat((minutes*60)+seconds);
        console.log(totalTime);
        
        
        return totalTime;

    }
}
