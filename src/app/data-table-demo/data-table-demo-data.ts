export class Car {
    year: number;
    maker: string;
    model: string;
    description: string;
    price: number;

    constructor(year: number, maker: string, model: string, description: string, price: number){
        this.year = year;
        this.maker = maker;
        this.model = model;
        this.description = description;
        this.price = price;
    }
}

export var cars = [
    new Car (1997, 'Ford', 'E350', 'ac, abs, moon', 3000.00 ),
    new Car ( 1999, 'Chevy', '', 'Venture "Extended Edition"', 4900.00 ),
    new Car ( 1999, 'Checy', '', 'Venture "Extended Edition, Very Large"', 5000.00 ),
    new Car ( 1996, 'Jeep', 'Grand Cherokee', 'air, moon roof, loaded', 4799.00 )
];