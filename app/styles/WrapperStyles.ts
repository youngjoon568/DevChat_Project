import { css } from "styled-components";

export const BgSizeStyle = ({ bgSize }: { bgSize?: "l" | "m" | "s" }) => css`
  ${bgSize === "l" &&
  css`
    width: 100%;
    height: 45px;
  `}
  ${bgSize === "m" &&
  css`

  `}
  ${bgSize === "s" &&
  css`
    padding: 10px;
  `}
  ${!bgSize &&
  css`

  `}
`;

export const TextSizeStyle = ({ textSize }: { textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s" }) => css`
  ${textSize === "xxxl" &&
  css`
    font-size: 2.8rem;
    font-weight: 600;
  `}
  ${textSize === "xxl" &&
  css`
    font-size: 2.6rem;
    font-weight: 600;
  `}
  ${textSize === "xl" &&
  css`
    font-size: 2rem;
    font-weight: 600;
  `}
  ${textSize === "l" &&
  css`
    font-size: 1.8rem;
    font-weight: 400;
  `}
  ${textSize === "m" &&
  css`
    font-size: 1.6rem;
    font-weight: 500;
  `}
  ${textSize === "s" &&
  css`
    font-size: 1.2rem;
    font-weight: 500;
  `}
  ${!textSize &&
  css`
    font-size: 1.4rem;
  `}
`;

export const BgColorStyle = ({ bgColor }: { bgColor?: string }) => css`
background-color: ${bgColor || "none"};
`;

export const TextColorStyle = ({ textColor }: { textColor?: string }) => css`
color: ${textColor || "#121212"};
`;

export const BorderStyle = ({ noneBorder }: { noneBorder?: boolean }) => css`
border: ${noneBorder ? "none" : "1px solid #121212"};
`;

export const IconSizeStyle = ({ iconSize }: { iconSize?: string }) => css`
  ${iconSize === "l" &&
  css`
    font-size: 2.4rem;
  `}
  ${iconSize === "m" &&
  css`
    font-size: 2rem;
  `}
  ${iconSize === "s" &&
  css`
    font-size: 1.6rem;
  `}
  ${!iconSize &&
  css`
    font-size: 1.8rem; 
  `}
`;