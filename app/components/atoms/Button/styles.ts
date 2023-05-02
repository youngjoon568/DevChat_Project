import styled, { css } from "styled-components";

interface ButtonWrapperProps {
    icon?: "google" | "kakao" | "github";
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
width: 100%;
height: 50px;
position: relative;
border-radius: 5px;
border: none;

${({ icon }) =>
        icon && css`
        span {
            display: inline;
            position: absolute;
            top: 50%;
            left: 120px;
            transform: translateY(-50%);
        }
    `}

${({ icon }) => {
        switch (icon) {
            case "kakao":
                return css`
                background-color: #F7E600;
            `;
            case "github":
                return css`
                background-color: #121212;
                color: #fff;
                `;
            default:
                return css`
                color: black;
                border: 1px solid #121212;
                background: none;
            `;
        }
    }}
`;