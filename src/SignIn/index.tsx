import React from 'react'
import {Text,Icon,FormWrap,FormLabel,FormInput,FormH1,FormContent,FormButton,Form,Container} from './signinElements'
const Signin = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>Uber</Icon>
                <FormContent>
                    <Form action = "#">
                        <FormH1>Sig in to you account</FormH1>
                        <FormLabel htmlFor='for'>email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Signin
