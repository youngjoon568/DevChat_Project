import styled, { css } from "styled-components";
import { BgColorStyle, BgSizeStyle, BorderStyle, TextColorStyle, TextSizeStyle } from "@/styles/WrapperStyles";
import { iconType } from "../Icon";

interface ButtonWrapperProps {
    bgSize?: "xl" | "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    border?: boolean;
    icon?: iconType;
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