import React, { useState } from 'react';
import * as I from "../../Assets/index";
import * as S from "./style";
import * as G from "../GlobalStyle";
import Anc from "../../anc";

function AncModal() {
  const [showAncModal, setShowAncModal] = useState(false);

  return (
    <>
      <S.Announce showAncModal={showAncModal} onClick={() => setShowAncModal(true)}>
        <G.TitleWrapper>
          <G.Title>매장</G.Title><G.Title2>안내</G.Title2>
        </G.TitleWrapper>
        <G.Image><I.Announce /></G.Image>
      </S.Announce>
      {showAncModal ?
        <S.Background>
          <S.ModalContainer>
            <S.ModalHeader>
              <div className="HeaderText">Manual</div>
              <I.Delete onClick={() => setShowAncModal(false)} className="DeleteButton" />
            </S.ModalHeader>
            <S.ModalWrapper>
              <S.ModalProblem>
                {Anc.map(Anc => (
                  <li key={Anc.id} class="ProblemWrapper">
                    <p className="Problem">{Anc.Problem}</p>  <br />
                  </li>
                ))}
              </S.ModalProblem>
              <S.ModalHandle>
                {Anc.map(Anc => (
                  <li key={Anc.id} class="HandleWrapper">
                    <p className="Handle">{Anc.Handle}</p>
                  </li>
                ))}
              </S.ModalHandle>
            </S.ModalWrapper>
          </S.ModalContainer>
        </S.Background> : null}
    </>
  )
}

export default AncModal;