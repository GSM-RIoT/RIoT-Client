import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: fixed;
`;

const CircleWrapper = styled.div`
    display: grid;
    width: 100%;
`;

const CircleWrapper2 = styled.div`
    display: grid;
    width: 100%;
    margin-left: 45vh;
`;

const Circle1 = styled.div`
    width: 369px;
    height: 369px;
    margin-top: -10vh;
    margin-left: -10vh;
    border-radius: 100%;
    background: #DAE9FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Circle2 = styled.div`
    width: 720px;
    height: 720px;
    margin-top: -10vh;
    margin-left: 5vh;
    border-radius: 100%;
    background: #DAE9FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Circle3 = styled.div`
    width: 769px;
    height: 770px;
    margin-top: 15vh;
    margin-left: -5vh;
    border-radius: 100%;
    background: #DAE9FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Circle4 = styled.div`
    width: 369px;
    height: 369px;
    margin-top: 20vh;
    margin-left: 45vh;
    border-radius: 100%;
    background: #DAE9FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

function Bg() {
    return(
        <>
          <MainWrapper>
            <CircleWrapper>
                <Circle1 />
                <Circle3 />
            </CircleWrapper>
            <CircleWrapper2>
                <Circle2 />
                <Circle4 />
            </CircleWrapper2>
          </MainWrapper>
        </>
    )
}

export default Bg;