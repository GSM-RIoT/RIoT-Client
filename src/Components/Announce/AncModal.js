import React from 'react';
import * as I from "../../Assets/index";
import * as S from "./style";
import * as G from "../GlobalStyle";

function AncModal() {
  return (
    <>
        <S.Announce>
          <G.TitleWrapper>
            <G.Title>매장</G.Title><G.Title2>안내</G.Title2>
          </G.TitleWrapper>
          <G.Image><I.Announce /></G.Image>
        </S.Announce>
    </>
  )
}

export default AncModal;