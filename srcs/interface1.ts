// interface (used when 'type' is complex)
export interface Seller {
    id: number,
    name: string,
    address?: string,

    // readonly value can't be changed after initialized
    readonly id2: string,
    readonly id3: string
}

// function interface
export interface SumValue{
    // (params:datatype):return value
    (value1: number, value2: number):number
}

// indexable interface (object or array)
export interface StringArray{
    [index: number]: string
}
export interface StringObject{
    [objKey: number]: string
}

// extending interface (we can extend interface to have inhereted values)
export interface Employee{
    id: number,
    name: string,
    division: string
}
export interface Manager extends Employee{
    numberOfEmployee: number
}