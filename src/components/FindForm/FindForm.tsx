"use client";

import { useState } from "react";
import { CustomButton } from "@/shared/CustomButton/CustomButton";
import { CustomInput } from "@/shared/CustomInput/CustomInput";

export const FindForm: React.FC<{ onSearch: (name: string) => void }> = ({ onSearch }) => {
    const [name, setName] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(name);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <CustomInput value={name} onChange={(e) => setName(e.target.value)} />
                <CustomButton type="submit" />
            </form>
        </div>
    );
};