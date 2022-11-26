import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
`

const Container1 = styled.div`
  width:${props => props.width};
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
   display: none;
  }
`

const Container2 = styled.div`
  width:${props => props.width};
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`

const FormContainer = styled.div`
width: 1047px;
height: 660px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0px 5px 15px 0px  rgba(0, 0, 0, 0.244) ;
border-radius: 10px;
margin-right: 30px;
@media (max-width: 768px) {
  width: 100%;
  height: 100%;
  margin-right: 0px;
}
`

export { MainContainer, Container1, Container2, FormContainer }