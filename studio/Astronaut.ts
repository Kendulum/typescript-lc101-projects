import { Payload } from './Payload';

class Astronaut implements Payload {
    
    massKg: number;
    
}

export class Astronaut {

    massKg: number;
    name: string;

    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }

}