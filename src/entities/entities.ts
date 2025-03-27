export interface Specie {
    id:number;
    name: string;
}

export interface Location {
    id: number;
    name: string;
}

export interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    species: Specie;
    location: Location
}