import { TextColorStyle, TextSizeStyle } from '@/styles/WrapperStyles';
import styled from 'styled-components';

interface TextWrapperProps {
  textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
  textColor?: string;
};

export const TextWrapper = styled.p<TextWrapperProps>`
line-height: 1.5;

${TextSizeStyle}
${TextColorStyle}
`;