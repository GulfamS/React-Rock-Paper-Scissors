import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 8px;

  background-color: transaprent;
  margin-top: 15px;
  width: 80%;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  font-family: 'Bree Serif';
  font-size: 24px;
  color: #ffffff;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: #ffffff;
  padding: 10px;
  width: 18%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const ScoreHeading = styled.p`
  font-family: 'Bree Serif';
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreResult = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 32px;
  font-weight: 500;
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
