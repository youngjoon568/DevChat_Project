import { TextWrapper } from "./styles";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
};

const Text: React.FC<TextProps> = ({ children, ...props }) => {
    return (
        <TextWrapper {...props}>{children}</TextWrapper>
    );
};

export default Text;