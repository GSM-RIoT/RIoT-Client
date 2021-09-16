import React from 'react';
import * as S from "./style"

function Bg() {
    return(
        <>
          <S.MainWrapper>
            <S.CircleWrapper>
                <S.Circle1 />
                <S.Circle3 />
            </S.CircleWrapper>
            <S.CircleWrapper2>
                <S.Circle2 />
                <S.Circle4 />
            </S.CircleWrapper2>
          </S.MainWrapper>
        </>
    )
}

export default Bg;