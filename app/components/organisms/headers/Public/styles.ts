import styled from "styled-components";

export const PublicHeaderWrapper = styled.header`
width: 100%;
height: 60px;
position: relative;
padding: 0 25px;
display: flex;
align-items: center;

p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`;