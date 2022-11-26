import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

const Container = styled.div`
  width:${props => props.width};
  height: 100vhpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
width: 380.22px;
height: 433.6px;
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
`

const Heading = styled.h1`
font-size: 2.5rem;
font-weight: 700;
margin-top: 100px;
margin-bottom: 30px;
`
const Form = styled.form`
  width: 80%;
  height: 400px;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  gap:1rem;
`
const Label = styled.label`
  font-size: 0.8rem;
  font-weight: ${props => props.weight || 500} ;
  color: ${props => props.color || "black"};
  line-height: ${props=> props.lineHeight || 0};
`

const InputBox = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  border-radius: 5px;
  background: transparent;
  margin-bottom: 10px;
  color: #737B86;
  padding-left: 10px;
`
const InputCheckBox = styled.input`
  color: #737B86;
`
const Link = styled.a`
  font-size: 0.8rem;
  font-weight: ${props => props.weight || 400};
  line-height: ${props=> props.lineHeight || 0};
  text-decoration: ${props => props.decoration || "none"};
  color: #F78719;
`

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
const PwDiv = styled.div`
  position: absolute;
  right: 0px;
`
const Button = styled.button`
  background-color: #1575A7;
  border: 1px solid #1575A7;
  width: 60%;
  height: 2.5rem;
  border-radius: 5px;
  color: white;
`

const LoginScreen = () => {
  return (
    <MainContainer>
      <Container width="40%">
        <Image src='/Assets/leftimg.png'/>
      </Container>
      <Container width="60%">
        <FormContainer>
          <Heading>Login</Heading>
          <Form>
          <Label>Login ID</Label>
          <InputBox type='text' placeholder='Enter Login ID'/>
          <Label>Password</Label>
          <InputBox type='password' placeholder='Enter Password'/>
          <Wrapper1 mt='-10px'>
          <InputCheckBox type='checkbox' />
          <Label weight='400' color="#737B86" >Remember Me</Label>
          <PwDiv>
          <Link>Change Password</Link>
          </PwDiv>
          </Wrapper1>
          <Wrapper1>
          <InputCheckBox type='checkbox' />
          <Label weight='400' color="#737B86" >Agree to</Label>
          <Link decoration='underline'>Terms & Conditions</Link>
          </Wrapper1>
          <Wrapper2>
          <Button>Login</Button>
          <div>
          <Label weight='400'>Don’t have an account? </Label>
          <Link decoration='underline' weight='700'>Register Here</Link>
          </div>
          </Wrapper2>
          </Form>
        </FormContainer>
      </Container>
    </MainContainer>
  )
}

export default LoginScreen