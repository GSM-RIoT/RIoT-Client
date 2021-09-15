import React from 'react';
import styled from 'styled-components';
import * as I from "../Assets/index";

const Wrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  display:flex;
  margin-top: 8vh;
  margin-left: 7vh;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 400;
  margin-right: 2vh;
  color: #ffffff;
  
`;

const Title2 = styled.div`
  font-size: 70px;
  font-weight: 400;
  color: #ACACAC;
`;

const Stock = styled.button`
  width: 630px;
  height: 821px;
  margin-left: 30vh;
  margin-top: 15vh;
  background: rgba(192, 242, 218, 0.81);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  border: 0;
  outline: 0;
  z-index: 3;
`;

const Announce = styled.button`
  width: 630px;
  height: 821px;
  margin-left: 3vh;
  margin-top: 15vh;
  background: #A8D5FFEB;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  border: 0;
  outline: 0;
  z-index: 3;
`;

const Image = styled.div`
  margin-top: 30vh;
  margin-left: 30vh;
`;

function Btn() {
    return(
        <>
          <Wrapper>
            <Stock>
              <TitleWrapper>
                <Title>상품</Title><Title2>재고</Title2>
              </TitleWrapper>
              <Image><I.Box/></Image>
            </Stock>
            <Announce>
              <TitleWrapper>
                <Title>매장</Title><Title2>안내</Title2>
              </TitleWrapper>
              <Image><I.Announce /></Image>
            </Announce>
          </Wrapper>
        </>
    )
}

export default Btn;