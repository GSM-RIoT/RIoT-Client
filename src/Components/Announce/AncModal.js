import React, { useState } from 'react';
import * as I from "../../Assets/index";
import * as S from "./style";
import * as G from "../GlobalStyle";
import Anc from "../../anc";

function AncModal() {
  const [showAncModal, setShowAncModal] = useState(false);
  const [fire, setFire] = useState(false);
  const [age, setAge] = useState(false);
  const [refund, setRefund] = useState(false);
  const [shortage, setShortage] = useState(false);
  const [getpackage, setPackage] = useState(false);

  const onFire = () => {
    setFire(true);
    setAge(false);
    setRefund(false);
    setShortage(false);
    setPackage(false);
  }

  const onAge = () => {
    setFire(false);
    setAge(true);
    setRefund(false);
    setShortage(false);
    setPackage(false);
  }

  const onRefund = () => {
    setFire(false);
    setAge(false);
    setRefund(true);
    setShortage(false);
    setPackage(false);
  }

  const onShortage = () => {
    setFire(false);
    setAge(false);
    setRefund(false);
    setShortage(true);
    setPackage(false);
  }

  const onPackage = () => {
    setFire(false);
    setAge(false);
    setRefund(false);
    setShortage(false);
    setPackage(true);
  }

  const items = Anc.map(data => {
    return (
      <>
        <div>{data.Problem} <br />
          {data.Handle}
        </div>
      </>
    )
  })

  return (
    <>
      <S.Announce onClick={() => setShowAncModal(true)}>
        <G.TitleWrapper>
          <G.Title>매장</G.Title><G.Title2>안내</G.Title2>
        </G.TitleWrapper>
        <G.Image><I.Announce /></G.Image>
      </S.Announce>
      {
        showAncModal ?
          <S.Background>
            <S.ModalContainer>
              <S.ModalHeader>
                <div className="HeaderText">Manual</div>
                <I.Delete className="DeleteButton" onClick={() => setShowAncModal(false)} />
              </S.ModalHeader>
              <S.Select>
                <div className="content-wrapper">
                  <I.Fire className="Icon" onClick={onFire} />
                  <p className="text">화재</p>
                </div>
                <div className="content-wrapper">
                  <I.CheckAge className="Icon" onClick={onAge} />
                  <p className="text">민증 확인</p>
                </div>
                <div className="content-wrapper">
                  <I.Refund className="Icon" onClick={onRefund} />
                  <p className="text">환불</p>
                </div>
                <div className="content-wrapper">
                  <I.Shortage className="Icon" onClick={onShortage} />
                  <p className="text">재고 부족</p>
                </div>
                <div className="content-wrapper">
                  <I.Package className="Icon" onClick={onPackage} />
                  <p className="text">물건 손상</p>
                </div>
              </S.Select>
              <S.Fire fire={fire}>
                {
                  fire ?
                    <div className="Wrapper">
                      <I.Fire />
                      <div className="Text">
                        {items[0]}
                      </div>
                    </div>
                    : null}
              </S.Fire>
              <S.Age age={age}>
                {
                  age ?
                    <div className="Wrapper">
                      <I.CheckAge />
                      <div className="Text">
                        {items[1]}
                      </div>
                    </div>
                    : null}
              </S.Age>
              <S.Refund refund={refund}>
                {
                  refund ?
                    <div className="Wrapper">
                      <I.Refund />
                      <div className="Text">
                        {items[2]}

                      </div>
                    </div>
                    : null}
              </S.Refund>
              <S.Shortage shortage={shortage}>
                {
                  shortage ?
                    <div className="Wrapper">
                      <I.Shortage />
                      <div className="Text">
                        {items[3]}

                      </div>
                    </div>
                    : null}
              </S.Shortage>
              <S.Package getpackage={getpackage}>
                {
                  getpackage ?
                    <div className="Wrapper">
                      <I.Package />
                      <div className="Text">
                        {items[4]}

                      </div>
                    </div>
                    : null}
              </S.Package>
            </S.ModalContainer>
          </S.Background > : null
      }

    </>
  )
}

export default AncModal;