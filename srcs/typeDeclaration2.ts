// Intersection Types (I used it when I can't extends from interface)
// We can combine two interface to make type or use it

interface Name{
    name: string
}
interface Id{
    id: number
}

export type Person = Name & Id

// Type assert (I used it when I know the datatype, but TS don't)
// e.g. when we call something from a javascript file Typescript can't guess its datatype
export const identity:any = {
    name: "baz",
    address: "foo"
}