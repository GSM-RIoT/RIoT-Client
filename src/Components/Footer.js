import React from 'react';
import styled from 'styled-components';
import * as I from "../Assets/index";

const Foot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25vh;
    font-size: 10vh;
`;

const GirlWrapper1 = styled.div`
    width: 620px;
    height: 569px;
    margin: 0 20vh -5.2vh 0;
`;
const GirlWrapper2 = styled.div`
    width: 646px;
    height: 569px;
    margin: 0 0 -1.2vh 20vh;
`;
function Footer() {
    return(
        <Foot>
            <GirlWrapper1><I.Girl1/></GirlWrapper1>
            <GirlWrapper2><I.Girl2/></GirlWrapper2>
        </Foot>
    )
}

export default Footer