import { BgColorStyle, BgSizeStyle, BorderStyle, TextColorStyle, TextSizeStyle } from "@/styles/WrapperStyles";
import styled from "styled-components";

interface InputWrapperProps {
    bgSize?: "xl" | "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    border?: boolean;
    borderColor?: string;
    inputText?: string;
    icon?: "";
    inputId?: string;
};

export const InputWrapper = styled.input<InputWrapperProps>`
width: 100%;
height: 100%;
border: none;
${BorderStyle}
${BgSizeStyle}
${BgColorStyle}

::placeholder {
    ${TextSizeStyle}
    ${TextColorStyle}
}
`;