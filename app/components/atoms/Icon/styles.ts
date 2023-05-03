import styled from "styled-components";

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { IconSizeStyle } from "@/styles/WrapperStyles";

interface IconWrapperProps {
    iconSize?: "l" | "m" | "s";
};

export const GoogleIconWrapper = styled(FcGoogle)<IconWrapperProps>`
${IconSizeStyle}
`;
export const GithubIconWrapper = styled(AiFillGithub)<IconWrapperProps>`
${IconSizeStyle}
`;