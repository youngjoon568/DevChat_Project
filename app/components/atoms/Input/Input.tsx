import { InputItemWrapper, InputWrapper } from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLElement> {
    bgSize?: "xl" | "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    border?: boolean;
    borderColor?: string;
    padSize?: "l" | "m" | "s";
    inputText?: string;
    icon?: "";
}

const Input: React.FC<InputProps> = ({ inputText, ...props }) => {
    return (
        <InputItemWrapper><InputWrapper placeholder={inputText} {...props} /></InputItemWrapper>
    );
};

export default Input;