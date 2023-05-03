import React from "react";
import { ButtonWrapper } from "./styles";
import Icon from "../Icon/Icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bgSize?: "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    noneBorder?: boolean;
    iconSize?: "l" | "m" | "s";
    icon?: "google" | "github";
};

const Button: React.FC<ButtonProps> = ({ bgSize, bgColor, textSize, textColor, noneBorder, icon, children }) => {    
    return (
        <ButtonWrapper bgSize={bgSize} bgColor={bgColor} textSize={textSize} textColor={textColor} noneBorder={noneBorder} icon={icon}>
            {icon && <Icon icon={icon} iconSize={"m"} />}
            <span>{children}</span>
        </ButtonWrapper>
    );
};

export default Button;