import styled from "styled-components";

export const SignupFormWrapper = styled.form`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px 0;
`;

export const InputContainerWrapper = styled.div`

`;

export const InputBoxWrapper = styled.div`
margin-bottom: 20px;

:last-child {
    margin-bottom: 0;
}

label {
    display: inline-block;
    margin-bottom: 8px;
}
`;

export const InputItemWrapper = styled.div`
position: relative;
padding: 10px;
height: 45px;
border: 1px solid #888;
border-radius: 5px;
`;

export const IconItemWrapper = styled.div`
position: absolute;
right: 10px;
top: 50%;
transform: translateY(-50%);
display: flex;

div:nth-child(2) {
    margin-left: 5px;
}
`;