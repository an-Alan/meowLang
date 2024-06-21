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
    paw: args => console.log(...args),
    random: ([min, max]) => {
        if (min >= 0 && max <= 1) return Math.random()
        return Math.random() * (max - min + 1) + min
    },
    round: number => Math.round(number)
}