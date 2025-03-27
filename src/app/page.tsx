"use client";

import { useState } from "react";
import { fetchCharacters } from "@/features/rickAndMortyApiGet";
import { CharacterList } from "@/components/CharacterList/CharacterList";
import { Character } from "@/entities/entities";
import { FindForm } from "@/components/FindForm/FindForm";

export default function Home() {
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSearch = async (name: string) => {
        const data = await fetchCharacters(name, 1);
        if (data && data.results) {
            setCharacters(data.results);
            setTotalPages(data.info.pages);
            setPage(1);
            setErrorMessage("");
        } else {
            setCharacters([]);
            setTotalPages(0);
            setErrorMessage("Такого персонажа не существует");
        }
    };

    const handleNextPage = async () => {
        if (page < totalPages) {
            const data = await fetchCharacters(name, page + 1);
            if (data) {
                setCharacters(data.results);
                setPage(page + 1);
            }
        }
    };

    const handlePrevPage = async () => {
        if (page > 1) {
            const data = await fetchCharacters(name, page - 1);
            if (data) {
                setCharacters(data.results);
                setPage(page - 1);
            }
        }
    };

    return (
        <div className="m-10">
            <FindForm onSearch={handleSearch} />

            {errorMessage && <div className="mt-5 text-red-500">{errorMessage}</div>}

            <CharacterList characters={characters} />

            <div className="flex gap-4 mt-5">
                <button
                    type="button"
                    onClick={handlePrevPage}
                    disabled={page <= 1}
                    className={`bg-blue-100 px-4 py-2 ${page <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    Назад
                </button>
                <button
                    type="button"
                    onClick={handleNextPage}
                    disabled={page >= totalPages}
                    className={`bg-blue-100 px-4 py-2 ${page >= totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    Вперед
                </button>
            </div>
        </div>
    );
};