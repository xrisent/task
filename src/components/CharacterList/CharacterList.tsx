import React from "react";
import { CharacterCard } from "@/shared/Character/Character";
import { Character } from "@/entities/entities";

interface CharacterListProps {
    characters: Character[];
}

export const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    return (
        <div className="mt-5">
            {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
            ))}
        </div>
    );
};