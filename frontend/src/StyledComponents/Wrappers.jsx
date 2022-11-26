import styled from 'styled-components'

const Wrapper1 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  position: relative;
  margin-top: ${props => props.mt || 0}
`


const Wrapper2 = styled(Wrapper1)`
  justify-content: center;
  margin-top: 1rem;
  flex-direction: column;
  gap: 1.5rem;
`


const PasswordWrapper = styled.div`
  position: absolute;
  right: 0px;
`

const InputPwDiv = styled.div`
position: relative;
margin-top:-10px
`
const Span = styled.span`
  z-index: 9999;
	position: absolute;
	top: 45%;
	right: 0;
`

export {Wrapper1, Wrapper2, PasswordWrapper, InputPwDiv, Span}