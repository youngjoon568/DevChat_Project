import { BgColorStyle, BgSizeStyle, BorderStyle, TextColorStyle, TextSizeStyle } from "@/styles/WrapperStyles";
import styled from "styled-components";

interface InputWrapperProps {
    bgSize?: "xl" | "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    border?: boolean;
    borderColor?: string;
    padSize?: "l" | "m" | "s";
    inputText?: string;
    icon?: "";
};

export const InputItemWrapper = styled.div<InputWrapperProps>`
border-radius: 5px;
${BorderStyle}
${BgSizeStyle}
${BgColorStyle}

padding: ${props => props.padSize === "l" ? "10px" : 
                    props.padSize === "m" ? "8px" : 
                    props.padSize === "s" ? "5px" : ""};
`;

export const InputWrapper = styled.input<InputWrapperProps>`
width: 100%;
height: 100%;

::placeholder {
    ${TextSizeStyle}
    ${TextColorStyle}
}
`;