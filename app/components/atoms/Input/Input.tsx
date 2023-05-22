import { InputWrapper } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    bgSize?: "xl" | "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    border?: boolean;
    borderColor?: string;
    padSize?: "l" | "m" | "s";
    inputText?: string;
    icon?: "";
    inputId?: string;
}

const Input: React.FC<InputProps> = ({ inputText, inputId, ...props }) => {
    return (
        <InputWrapper placeholder={inputText} id={inputId} {...props} required={true} autoComplete={"off"} />
    );
};

export default Input;