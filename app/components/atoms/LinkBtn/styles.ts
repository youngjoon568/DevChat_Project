import styled, { css } from "styled-components";
import Link from "next/link";
import { BgColorStyle, BgSizeStyle, BorderStyle, TextColorStyle, TextSizeStyle } from "@/styles/WrapperStyles";
import { iconType } from "../Icon";

interface LinkBtnWrapperProps {
    bgSize?: "xl" | "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    border?: boolean;
    box?: boolean;
    type?: boolean;
    href?: string;
    icon?: iconType;
    iconSize?: "l" | "m" | "s";
};

export const LinkBtnWrapper = styled(Link)<LinkBtnWrapperProps>`
display: block;
cursor: pointer;


${({ border }) => 
    !border && css`
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    `
}

${({ box  }) => 
    box && css`
        display: inline;
    `
}

${({ box  }) =>
    !box && css`
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    `
}

${BgSizeStyle}
${BgColorStyle}
${TextSizeStyle}
${TextColorStyle}
${BorderStyle}
`;