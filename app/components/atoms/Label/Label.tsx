import React from 'react';
import { LabelWrapper } from './styles';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    labelText: string;
};

const Label: React.FC<LabelProps> = ({ labelText, children, ...props }) => {
    return (
        <LabelWrapper htmlFor={labelText} {...props}>{ children }</LabelWrapper>
    );
};

export default Label;