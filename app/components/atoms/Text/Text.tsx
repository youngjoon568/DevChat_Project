import { TextWrapper } from "./styles";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
};

const Text: React.FC<TextProps> = ({ textSize = "s", children }) => {
    return (
        <TextWrapper textSize={textSize}>{children}</TextWrapper>
    );
};

export default Text;