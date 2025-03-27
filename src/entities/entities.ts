export interface Location {
    id: number;
    name: string;
}

export interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    location: Location
}