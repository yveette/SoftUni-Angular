abstract class Melon {
    public weight: number;
    public melonSort: string;
    public elementIndex: number;
    protected element: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = weight * melonSort.length;
        this.element = '';
    }

    public getElementIndex(): number {
        return this.elementIndex;
    }

    public toString(): string {
        let result: string = `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        return result;
    }
}

export class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Water';
    }
}

export class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Fire';
    }
}

export class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Earth';
    }
}

export class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Air';
    }
}

export class Melolemonmelon extends Watermelon {
    private elements: string[];
    private elementCount: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        this.element = 'Water';
        this.elementCount = 0;
    }
    public morph(): void {
        this.element = this.elements[this.elementCount];
        this.elementCount++;
        if (this.elementCount >= this.element.length) {
            this.elementCount = 0;
        }
    }
}

// let test: Melon = new Melon(100, "Test");
//Throws error

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100

let firemelon: Firemelon = new Firemelon(18, "Big Fire");
console.log(firemelon.toString());
// Element: Fire
// Sort: Big Fire
// Element Index: 144

let earthmelon: Earthmelon = new Earthmelon(25, "Medium");
console.log(earthmelon.toString());
// Element: Earth
// Sort: Medium
// Element Index: 150

let airmelon: Airmelon = new Airmelon(5, "Minimal");
console.log(airmelon.toString());
// Element: Air
// Sort: Minimal
// Element Index: 35

let melolemonmelon: Melolemonmelon = new Melolemonmelon(5, "Minimal");
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
