import { Parser } from './parser.js'


export class MeowError extends Error{
    constructor(msg) {
        super()
        this.message = msg
    }

    toString(){
        return this.message
    }
}

export default {
    grrr: args => console.log(...args),
    randmeow: ([min, max]) => {
        if (min >= 0 && max <= 1) return Math.random()
        return Math.random() * (max - min + 1) + min
    },
    round: number => Math.round(number),
    meows: () => {
        let outs = "";
        for (let i = 0; i < Math.random() * (100 - 20 + 1) + 20; i++){
            outs = "";
            for (let j = 0; j < Math.random() * (30 - 1 + 1) + 1; j++)
                outs = outs + "meow "
            console.log(outs)
        }       
    }
}