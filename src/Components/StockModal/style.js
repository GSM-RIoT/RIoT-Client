import styled from 'styled-components';

export const Stock = styled.button`
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

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 4;
`;

export const ModalContainer = styled.div`
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

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10vh;
  margin-right: 45vh;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  z-index: 8;
`;

export const ModalStock = styled.div`
  width: 62%;
  height: 95%;
  overflow-y: auto;
  margin-top: 2vh;
`;

export const ModalMap = styled.div`
  width: 38%;
  height: 95%;
  margin-top: 2vh;
  margin-left: 1vh;
  border-radius: 1rem;
  background-color: #2d3547;

  .Introduce_Text {
    font-size: 25px;
    margin-bottom: 28vh;
  }
`;

export const Map = styled.div`
    .Map {
    transform: scale(1);
    cursor: pointer;
  }

  &:active {
    transform: translateX(-10vh) translate(-10vh) scale(2) translateY(-7vh) ;
    transition: all 0.5s 3s;
    transition-delay: 0.1s;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 2vh 2vh 2vh;
  width: 20vh;
  height: 20vh;
  border-radius: 1rem;
  background-color: #5f6b85;
`;