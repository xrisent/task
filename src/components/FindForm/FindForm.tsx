"use client"

import { useState } from "react";
import { fetchCharacters } from "@/features/rickAndMortyApiGet";
import { CustomButton } from "@/shared/CustomButton/CustomButton";
import { CustomInput } from "@/shared/CustomInput/CustomInput";

export const FindForm: React.FC = () => {
    const [name, setName] = useState("");
    const [characters, setCharacters] = useState<any[]>([]);

    const handleSearch = async () => {
        const data = await fetchCharacters(name, 1);
        if (data) {
            setCharacters(data.results);
        }
    };

    return (
        <div className="m-10">
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                <CustomInput value={name} onChange={(e) => setName(e.target.value)} />
                <CustomButton type="submit" />
            </form>

            <div className="mt-5">
                {characters.map((char) => (
                    <div key={char.id} className="p-2 border-b">{char.name}</div>
                ))}
            </div>

        </div>
    );
};