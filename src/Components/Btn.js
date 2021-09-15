import React, { useState } from 'react';
import styled from 'styled-components';
import * as I from "../Assets/index";
import Information from '../Info';

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
  height: 95%;
  overflow-y: auto;
  margin-top: 2vh;
`;

const ModalMap = styled.div`
  width: 38%;
  height: 95%;
  margin-top: 2vh;
  margin-left: 1vh;
  border-radius: 1rem;
  background-color: #2d3547;
`;

const ContentWrapper = styled.div`
  display: flex;
`;


const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 2vh 2vh 2vh;
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

  const items = Information.map(data => {
    return (
      <>
        {data.Name} <br />
        재고: {data.Stock} 개 <br />
      </>
    )
  })
  const [searchTerm, setSearchTerm] = useState('')
  const Test = Information.filter((val) => {
    if (searchTerm == "") { return val }
    else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || val.Name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) { return val }
  }).map((data, key) => {
    return (
      <div key={key}>
        {data.Image}<br />
        {data.Name} <br />
        재고: {data.Stock} 개
      </div>
    )
  })
  return (
    <>
      <Wrapper>
        <Stock showStockModal={showStockModal} onClick={openModal}>
          <TitleWrapper>
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
                  <input type="text" placeholder="검색" className="SearchBox" onChange={event => { setSearchTerm(event.target.value) }} />
                  <I.Search className="SearchButton" />
                </Search>
                <I.Delete onClick={closeModal} className="DeleteButton" />
              </ModalHeader>
              <ModalWrapper>
                <ModalStock>
                  <ContentWrapper>
                    <Content>{Test[0]}</Content>
                    <Content>{Test[1]}</Content>
                    <Content>{Test[2]}</Content>
                  </ContentWrapper>
                  <ContentWrapper>
                    <Content>{Test[3]}</Content>
                    <Content>{Test[4]}</Content>
                    <Content>{Test[5]}</Content>
                  </ContentWrapper>
                  <ContentWrapper>
                    <Content>{Test[6]}</Content>
                    <Content>{Test[7]}</Content>
                    <Content>{Test[8]}</Content>
                  </ContentWrapper>
                  <ContentWrapper>
                    <Content>{Test[9]}</Content>
                    <Content>{Test[10]}</Content>
                    <Content>{Test[11]}</Content>
                  </ContentWrapper>

                </ModalStock >
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