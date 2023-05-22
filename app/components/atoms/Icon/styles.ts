import styled from "styled-components";

import { IconSizeStyle, TextColorStyle } from "@/styles/WrapperStyles";

interface IconWrapperProps {
    iconSize?: "l" | "m" | "s";
    textColor?: string;
};

export const IconContainerWrapper = styled.div<IconWrapperProps>`

svg {
    ${IconSizeStyle}
    ${TextColorStyle}
}
`;