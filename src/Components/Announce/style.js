import styled from 'styled-components';

export const Announce = styled.button`
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
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .HeaderText {
      color: #FFFFFF;
      font-size: 6vh;
      margin-right: 90vh;
  }

  .DeleteButton {
      cursor: pointer;
    }
`;

export const ModalProblem = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 10vh;
  color: #FFFFFF;
  .ProblemWrapper{
    margin-bottom: 5vh;
  }
`;

export const ModalHandle = styled.div`
  display: grid;
  list-style: none;
  margin-left: 20vh;
  .Handle {
    color: #FFFFFF;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  margin-top: 6vh;
`;