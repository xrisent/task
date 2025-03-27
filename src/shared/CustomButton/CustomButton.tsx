export const CustomButton: React.FC<{ type?: "submit" | "button" }> = ({ type = "button" }) => (
    <button type={type} className="w-30 bg-red-100 h-10">Найти</button>
);