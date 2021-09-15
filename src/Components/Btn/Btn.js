/* eslint-disable array-callback-return */
import React from 'react';
import * as I from "../../Assets/index";
import * as S from "./style";
import StockModal from "../StockModal/StockModal";

function Btn() {
  return (
    <>
      <S.Wrapper>
        <StockModal />
        <S.Announce>
          <S.TitleWrapper>
            <S.Title>매장</S.Title><S.Title2>안내</S.Title2>
          </S.TitleWrapper>
          <S.Image><I.Announce /></S.Image>
        </S.Announce>
      </S.Wrapper>
    </>
  )
}

export default Btn;