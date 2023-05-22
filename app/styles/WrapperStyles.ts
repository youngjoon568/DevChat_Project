import { css } from "styled-components";

export const BgSizeStyle = ({ bgSize }: { bgSize?: "xl" | "l" | "m" | "s" }) => css`
  ${bgSize === "xl" &&
    css`
    width: 100%;
    height: 48px;
  `}
  ${bgSize === "l" &&
    css`
    width: 100%;
    height: 45px;
  `}
  ${bgSize === "m" &&
    css`
    padding: 10px;
  `}
  ${bgSize === "s" &&
    css`
    padding: 5px;
  `}
  ${!bgSize &&
    css`
    height: 100%;
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
    font-weight: 600;
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

export const BorderStyle = ({ border, borderColor }: { border?: boolean, borderColor?: string }) => css`
border: ${border ? "none" : `1px solid ${borderColor ? borderColor : "#121212"}`};
`;

export const IconSizeStyle = ({ iconSize }: { iconSize?: string }) => css`
  font-size: ${_ => {
        switch (iconSize) {
            case "l":
                return "2.4rem";
            case "m":
                return "1.8rem";
            case "s":
                return "1.6rem";
            default:
                return "2rem";
        }
    }};
`;