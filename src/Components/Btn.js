import React, { useState } from 'react';
import styled from 'styled-components';
import * as I from "../Assets/index";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-right: 2vh;
  margin-top: 15vh;
  background: rgba(192, 242, 218, 0.81);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  border: 0;
  outline: 0;
  z-index: 3;
  cursor: pointer;
`;

const Announce = styled.button`
  width: 630px;
  height: 821px;
  margin-left: 2vh;
  margin-top: 15vh;
  background: #A8D5FFEB;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  border: 0;
  outline: 0;
  z-index: 3;
  cursor: pointer;
`;

const Image = styled.div`
  margin-top: 30vh;
  margin-left: 30vh;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 4;
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 120vh;
    height: 80%;
    padding: 16px;
    background: rgb(25, 31, 44);
    border-radius: 10px;
    text-align: center;

    .HeaderText {
      color: #FFFFFF;
      font-size: 6vh;
      margin-right: 15vh;
    }
    .SearchBox {
      width: 250px;
      height: 30px;
    }

    .SearchButton {
      cursor: pointer;
      margin-left: 1vh;
    }

    .DeleteButton {
      cursor: pointer;
    }
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10vh;
  margin-right: 45vh;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  z-index: 8;
`;

const ModalStock = styled.div`
  width: 62%;
  height: 100%;
`;

const ModalMap = styled.div`
  width: 38%;
  height: 95%;
  margin-top: 2vh;
  border-radius: 1rem;
  background-color: #2d3547;
`;

const ContentWrapper = styled.div`
  display: flex;
`;


const Content = styled.div`
  margin: 2vh 2vh 2vh 2vh;
  width: 20vh;
  height: 20vh;
  border-radius: 1rem;
  background-color: #5f6b85;
`;

function Btn() {
  const [showStockModal, setShowStockModal] = useState(false);

  const openModal = () => {
    setShowStockModal(true);
  }

  const closeModal = () => {
    setShowStockModal(false);
  }

  return (
    <>
      <Wrapper>
        <Stock>
          <TitleWrapper showStockModal={showStockModal} onClick={openModal}>
            <Title>상품</Title><Title2>재고</Title2>
          </TitleWrapper>
          <Image><I.Box /></Image>
        </Stock>
        {showStockModal ?
          <Background>
            <ModalContainer>
              <ModalHeader>
                <div className="HeaderText">Riosk</div>
                <Search>
                  <input type="text" placeholder="검색" className="SearchBox" />
                  <I.Search className="SearchButton" />
                </Search>
                <I.Delete onClick={closeModal} className="DeleteButton" />
              </ModalHeader>
              <ModalWrapper>
                <ModalStock>
                  <ContentWrapper>
                    <Content />
                    <Content />
                    <Content />
                  </ContentWrapper>
                  <ContentWrapper>
                    <Content />
                    <Content />
                    <Content />
                  </ContentWrapper>
                  <ContentWrapper>
                    <Content />
                    <Content />
                    <Content />
                  </ContentWrapper>
                </ModalStock>
                <ModalMap></ModalMap>
              </ModalWrapper>
            </ModalContainer>
          </Background> : null}

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