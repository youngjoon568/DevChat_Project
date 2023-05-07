import styled, { css } from "styled-components";
import { BgColorStyle, BgSizeStyle, BorderStyle, TextColorStyle, TextSizeStyle } from "@/styles/WrapperStyles";

interface ButtonWrapperProps {
    bgSize?: "xl" | "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    border?: boolean;
    icon?: "left" | "google" | "github";
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
position: relative;
border-radius: 5px;

${({ icon }) =>
    icon && css`
        span {
            display: inline;
            position: absolute;
            top: 50%;
            left: 120px;
            transform: translateY(-50%);
        }
    `
}

${BgSizeStyle}
${BgColorStyle}
${TextSizeStyle}
${TextColorStyle}
${BorderStyle}
`;