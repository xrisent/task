import { CustomButton } from "@/shared/CustomButton/CustomButton";
import { CustomInput } from "@/shared/CustomInput/CustomInput";

export const FindForm: React.FC<{}> = () => {
    return (
        <form className="m-10">
            <CustomInput/>
            <CustomButton/>
        </form>
    )
};