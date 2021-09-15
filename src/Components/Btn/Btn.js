import React from 'react';
import * as S from "./style";
import StockModal from "../StockModal/StockModal";
import AncModal from '../Announce/AncModal';

function Btn() {
  return (
    <>
      <S.Wrapper>
        <StockModal />
        <AncModal />
      </S.Wrapper>
    </>
  )
}

export default Btn;