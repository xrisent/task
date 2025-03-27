export interface Specie {
    name: string;
}

export interface Location {
    name: string;
}

export interface Character {
    name: string;
    image: string;
    status: string;
    species: Specie;
    location: Location
}