import styled from "styled-components";

export const SignLayoutWrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
`;

export const TextBox = styled.div`
width: 100%;
padding: 0 25px;
flex: 1.3;
position: relative;

p:first-child {
    margin-bottom: 2px;
}
`;

export const TextInner = styled.div`
position: absolute;
top: 50%;
transform: translateY(-50%);
`;

export const BtnContainer = styled.div`
width: 100%;
padding: 0 25px;
flex: 1;

`;

export const BtnBox = styled.div`
width: 100%;

button {
    margin-bottom: 20px;
}

button:last-child {
    margin-bottom: 0;
}

button svg {
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translate(-50%, -50%);
}
`;

export const LinkBtnBox = styled.div`
width: 100%;
padding-top: 10px;
display: flex;
justify-content: center;
`;