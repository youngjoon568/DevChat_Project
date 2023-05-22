import React from "react";
import { ButtonWrapper } from "./styles";
import Icon from "../Icon/Icon";
import { iconType } from "../Icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bgSize?: "xl" | "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    border?: boolean;
    icon?: iconType;
    iconSize?: "l" | "m" | "s";
};

const Button: React.FC<ButtonProps> = ({ icon, iconSize, children, ...props }) => {    
    return (
        <ButtonWrapper icon={icon} {...props}>
            {icon && <Icon icon={icon} iconSize={iconSize} />}
            <span>{children}</span>
        </ButtonWrapper>
    );
};

export default Button;