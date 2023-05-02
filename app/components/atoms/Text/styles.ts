import styled from 'styled-components';

interface TextWrapperProps {
    size?: "xl" | "l" | "m" | "s";
};

export const TextWrapper = styled.p<TextWrapperProps>`
line-height: 1.5;

${({ size }) => {
    switch (size) {
      case "xl":
        return `
          font-size: 2.8rem;
          font-weight: 600;
        `;
      case "l":
        return `
          font-size: 2rem;
          font-weight: 400;
        `;
      case "m":
        return `
          font-size: 1.4rem;
          font-weight: 500;
        `;
      case "s":
      default:
        return `
          font-size: 1.2rem;
        `;
    }
  }}
`;