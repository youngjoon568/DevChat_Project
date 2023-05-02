import React from "react";
import { ButtonWrapper } from "./styles";
import Icon, { icon } from "./Icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: icon;
};

const Button: React.FC<ButtonProps> = ({ children, icon, ...props }) => {
    return (
        <ButtonWrapper icon={icon} {...props}>
            {icon && <Icon icon={icon} />}
            <span>{children}</span>
        </ButtonWrapper>
    );
};

export default Button;
