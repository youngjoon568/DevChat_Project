import { InputWrapper } from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLElement> {
    bgSize?: string;
    textSize?: string;
}

const Input: React.FC<InputProps> = ({ bgSize }) => {
    return (
        <InputWrapper />
    );
};

export default Input;