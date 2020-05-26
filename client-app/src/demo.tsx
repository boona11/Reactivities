export interface ICar{
    color:string;
    model:string;
    year:string
}

const car1 : ICar = {
    color:'red',
    model:'bmw',
    year:'1983'
}

const car2 : ICar = {
    color:'white',
    model:'gmc',
    year:'1999'
}

export const cars = [car1, car2]