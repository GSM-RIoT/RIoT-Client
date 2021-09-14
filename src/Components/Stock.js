import React from 'react';
import styled from 'styled-components';
import * as I from "../Assets/index";

const StockWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 30vh;
    margin-top: 10vh;
    font-size: 10vh;
`;

const Box = styled.button`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 30vh;
    height: 30vh;
    background: #8EC0E4;
    border-radius: 1vh;
    outline: none;
    border: 0;
    margin-right: 5vh;
    font-size: 5vh;
`;

const Help = styled.button`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 30vh;
    height: 30vh;
    background: #CADBE9;
    border-radius: 1vh;
    outline: none;
    border: 0;
    margin-left: 5vh;
    font-size: 5vh;
`;

function Stock() {
    return(
        <StockWrapper>
            <Box><I.Box/>재고</Box>
            <Help><I.Help/>도움말</Help>
        </StockWrapper>
    )
}

export default Stock;