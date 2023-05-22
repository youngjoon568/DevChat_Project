import React from "react";
import { ICON_TYPE, iconType } from "./type";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiOutlineLeft } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { IconContainerWrapper } from "./styles";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

interface IconProps {
    icon?: iconType;
    iconSize?: "l" | "m" | "s";
    textColor?: string;
}

const Icon: React.FC<IconProps> = ({ icon, iconSize, ...props }) => {
    let IconWrapper;

    switch (icon) {
        case ICON_TYPE.LEFT: IconWrapper = AiOutlineLeft; break;
        case ICON_TYPE.GITHUB: IconWrapper = AiFillGithub; break;
        case ICON_TYPE.GOOGLE: IconWrapper = FcGoogle; break;
        case ICON_TYPE.CLOSE: IconWrapper = AiFillCloseCircle; break;
        case ICON_TYPE.EYE : IconWrapper = BsEyeFill; break;
        case ICON_TYPE.EYEINV : IconWrapper = BsEyeSlashFill; break;
        default: IconWrapper = null;
    };
    return (
        <>
            {IconWrapper && (
                <IconContainerWrapper iconSize={iconSize} {...props}>
                    <IconWrapper />
                </IconContainerWrapper>
            )}
        </>
    );
};

export default Icon;