import styled, { ThemeProps, css } from "styled-components";
import { MyTheme } from "@/pages/_app";
import { BgColorStyle, BgSizeStyle, BorderStyle, TextColorStyle, TextSizeStyle } from "@/styles/WrapperStyles";

interface ButtonWrapperProps extends ThemeProps<MyTheme> {
    bgSize?: "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    noneBorder?: boolean;
    icon?: "google" | "github";
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
position: relative;
border-radius: 5px;

${icon =>
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