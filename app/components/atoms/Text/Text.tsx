import { TextWrapper } from "./styles";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    size?: "xl" | "l" | "m" | "s";
};

const Text: React.FC<TextProps> = ({ size = "s", children }) => {
    return (
    <TextWrapper size={size}>{ children }</TextWrapper>
    );
};

export default Text;