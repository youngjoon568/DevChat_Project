import { Button } from '@/components/atoms/Button';
import { GlobalStyle } from '@/styles/GlobalStyle';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
padding: 0 20px;

button {
  margin-bottom: 20px;
}

button:last-child {
  margin-bottom: 0;
}
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
    </>
  );
};