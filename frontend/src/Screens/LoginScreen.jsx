import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { useState } from 'react'
import { MainContainer, Container1, Container2, FormContainer } from '../StyledComponents/Containers'
import {Form} from '../StyledComponents/Forms'
import {Heading} from '../StyledComponents/Headings'
import {Image} from '../StyledComponents/Image'
import {InputBox, InputCheckBox} from '../StyledComponents/InputFields'
import {Label} from '../StyledComponents/Labels'
import {Link} from '../StyledComponents/Links'
import {LoginButton, EyeButton} from '../StyledComponents/Buttons'
import {Wrapper1, Wrapper2, PasswordWrapper, InputPwDiv, Span} from '../StyledComponents/Wrappers'

const LoginScreen = () => {
  const [type, SetType] = useState("password")

  const clickHandler = () => {
    if (type === 'password'){
      SetType('text')
    } else {
      SetType('password')
    }
  }
  return (
    <MainContainer>
      <Container1 width="40%">
        <Image src='/Assets/leftimg.png' width = "380.22px" height = "433.6px"/>
      </Container1>
      <Container2 width="60%">
        <FormContainer>
          <Heading>Login</Heading>
          <Form>
          <Label>Login ID</Label>
          <InputBox type='text' placeholder='Enter Login ID'/>
          <InputPwDiv>
          <Label>Password</Label>
          <InputBox type={type} placeholder='Enter Password'/>
          <Span>
            <EyeButton onClick={clickHandler}>
            {type === 'password' ?
                <AiFillEyeInvisible size='1.5rem' color='#737B86'/> 
                : <AiFillEye size='1.5rem' color='#737B86'/>}
            </EyeButton>
          </Span>
          </InputPwDiv>   
          <Wrapper1 mt='-10px'>
          <InputCheckBox type='checkbox' />
          <Label weight='400' color="#737B86" >Remember Me</Label>
          <PasswordWrapper>
          <Link>Change Password</Link>
          </PasswordWrapper>
          </Wrapper1>
          <Wrapper1>
          <InputCheckBox type='checkbox' />
          <Label weight='400' color="#737B86" >Agree to</Label>
          <Link decoration='underline'>Terms & Conditions</Link>
          </Wrapper1>
          <Wrapper2>
          <LoginButton>Login</LoginButton>
          <div>
          <Label weight='400'>Don’t have an account? </Label>
          <Link decoration='underline' weight='700'>Register Here</Link>
          </div>
          </Wrapper2>
          </Form>
        </FormContainer>
      </Container2>
    </MainContainer>
  )
}

export default LoginScreen