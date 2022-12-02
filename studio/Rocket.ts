import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    
    name: string;
    totalCapcityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapcityKg: number) {
        this.name = name;
        this.totalCapcityKg = totalCapcityKg;
    }

    sumMass( items: Payload[] ): number {
        let sum: number = 0;
        for(let i = 0; i < items.length; i++) {
            sum += items[i].massKg
        }
        return sum;
    }
	
    currentMasskg(): number {
        return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
    }

    canAdd(item: Payload): boolean {
        if (this.currentMasskg() + item.massKg <= this.totalCapcityKg) {
        }
        return true;
    }

    // addCargo(cargo: Cargo): boolean {
    //     if (this.canAdd() === true) {
    //     }
    //     return 
    // }

}

