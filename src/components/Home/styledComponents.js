import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #223a5f;
  height: 100vh;
  width: 100vw;
  padding: 18px;
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-between;
  padding: 8px;
  @media screen and (max-width: 576px) {
    height: 250px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  height: 90%;
  width: 100%;
  margin-top: auto;
`
