import styled, { css } from "styled-components";
import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

export type icon = "google" | "kakao" | "github";

interface IconWrapperProps {
    icon: icon;
}

const ICON_TYPES = {
    google: FcGoogle,
    kakao: RiKakaoTalkFill,
    github: AiFillGithub,
};

const IconWrapper = styled.div<IconWrapperProps>`
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
`;

interface IconProps {
    icon: icon;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
    const IconComponent = ICON_TYPES[icon];

    return (
        <IconWrapper icon={icon}>
            {IconComponent && <IconComponent />}
        </IconWrapper>
    );
};

export default Icon;