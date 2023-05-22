import { TextColorStyle, TextSizeStyle } from "@/styles/WrapperStyles";
import styled from "styled-components";

interface LabelWrapperProps {
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
};

export const LabelWrapper = styled.label<LabelWrapperProps>`
${TextSizeStyle}
${TextColorStyle}
`;