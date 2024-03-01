import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  width: 400px;
  @media screen and (max-width: 576px) {
    height: 250px;
    width: 250px;
    margin-left: 15px;
  }
`

export const GameButton = styled.button`
  height: 150px;
  width: 150px;
  background-color: transparent;
  border: none;
  outline: none;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
    margin-top: 0px;
    margin-right: 18px;
  }
`

export const GameImage = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`

export const ResultName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ResultText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 25px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
