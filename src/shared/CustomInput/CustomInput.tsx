export const CustomInput: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ value, onChange }) => (
    <input
        className="w-96 h-10 text-black-500 bg-gray-100 px-5"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Введите имя персонажа"
    />
);