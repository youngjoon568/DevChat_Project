import styled from "styled-components";
import { icon } from "../Icon";
import Link from "next/link";
import { BgColorStyle, BgSizeStyle, BorderStyle, TextColorStyle, TextSizeStyle } from "@/styles/WrapperStyles";

interface LinkBtnWrapperProps {
    bgSize?: "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    noneBorder?: boolean;
    type?: "read" | "back";
    href?: string;
    icon?: icon;
};

export const LinkBtnWrapper = styled(Link)<LinkBtnWrapperProps>`
display: block;
cursor: pointer;

${BgSizeStyle}
${BgColorStyle}
${TextSizeStyle}
${TextColorStyle}
${BorderStyle}
`;