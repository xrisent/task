import React from "react";
import { Character } from "@/entities/entities";

interface CharacterProps {
    character: Character;
}

export const CharacterCard: React.FC<CharacterProps> = ({ character }) => {
    return (
        <div className="p-4 border-b">
            <img src={character.image} alt={character.name} className="w-24 h-24 rounded-full" />
            <div>Имя: {character.name}</div>
            <div>Статус: {character.status}</div>
            <div>РАса: {character.species}</div>
            <div>Локация: {character.location.name}</div>
        </div>
    );
};