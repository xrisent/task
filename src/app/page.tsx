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
    const [loading, setLoading] = useState(false); 

    // добавил для того чтобы увидеть точки эти
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const handleSearch = async (name: string) => {

        setLoading(true); 
        setCharacters([])

        // добавил для того чтобы увидеть точки эти
        await delay(5000);

        const data = await fetchCharacters(name, 1);
        setLoading(false);
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
            setLoading(true);  
            const data = await fetchCharacters(name, page + 1);
            setLoading(false); 
            if (data) {
                setCharacters(data.results);
                setPage(page + 1);
            }
        }
    };

    const handlePrevPage = async () => {
        if (page > 1) {
            setLoading(true);
            const data = await fetchCharacters(name, page - 1);
            setLoading(false);
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

            {loading && (
                <div className="mt-5 flex justify-center">
                    <span className="animate-pulse text-5xl">.</span>
                    <span className="animate-pulse text-5xl">.</span>
                    <span className="animate-pulse text-5xl">.</span>
                </div>
            )}

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
}
