import React, { useState } from 'react';
import * as I from "../../Assets/index";
import * as S from "./style"
import * as G from "../GlobalStyle";
import Information from '../../Info';

function StockModal() {
  const [showStockModal, setShowStockModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = () => {
    setShowStockModal(true);
  }

  const closeModal = () => {
    setShowStockModal(false);
  }

  // eslint-disable-next-line array-callback-return
  const Test = Information.filter((val) => {
    if (searchTerm === "") { return val }
    else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || val.Name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) { return val }
  }).map((data, key) => {
    return (
      <div key={key}>
        {data.Image}<br />
        {data.Name} <br />
          재고: {data.Stock}개
      </div>
    )
  })

  return (
    <>
      <S.Stock showStockModal={showStockModal} onClick={openModal}>
        <G.TitleWrapper>
          <G.Title>상품</G.Title><G.Title2>재고</G.Title2>
        </G.TitleWrapper>
        <G.Image><I.Box /></G.Image>
      </S.Stock>
      {showStockModal ?
        <S.Background>
          <S.ModalContainer>
            <S.ModalHeader>
              <div className="HeaderText">Riosk</div>
              <S.Search>
                <input type="text" placeholder="검색" className="SearchBox" onChange={event => { setSearchTerm(event.target.value) }} />
                <I.Search className="SearchButton" />
              </S.Search>
              <I.Delete onClick={closeModal} className="DeleteButton" />
            </S.ModalHeader>
            <S.ModalWrapper>
              <S.ModalStock>
                <S.ContentWrapper>
                  <S.Content>{Test[0]}</S.Content>
                  <S.Content>{Test[1]}</S.Content>
                  <S.Content>{Test[2]}</S.Content>
                </S.ContentWrapper>
                <S.ContentWrapper>
                  <S.Content>{Test[3]}</S.Content>
                  <S.Content>{Test[4]}</S.Content>
                  <S.Content>{Test[5]}</S.Content>
                </S.ContentWrapper>
                <S.ContentWrapper>
                  <S.Content>{Test[6]}</S.Content>
                  <S.Content>{Test[7]}</S.Content>
                  <S.Content>{Test[8]}</S.Content>
                </S.ContentWrapper>
                <S.ContentWrapper>
                  <S.Content>{Test[9]}</S.Content>
                  <S.Content>{Test[10]}</S.Content>
                  <S.Content>{Test[11]}</S.Content>
                </S.ContentWrapper>
              </S.ModalStock >
              <S.ModalMap>
                <div className="Introduce_Text">설명</div>
                <S.Map><I.Map className="Map" /></S.Map>
              </S.ModalMap>
            </S.ModalWrapper>
          </S.ModalContainer>
        </S.Background> : null}
    </>
  )
}


export default StockModal;