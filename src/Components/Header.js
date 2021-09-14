import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 20vh;
    font-size: 10vh;
`;

function Header() {
    return(
        <Head>Riosk</Head>
    )
}

export default Header