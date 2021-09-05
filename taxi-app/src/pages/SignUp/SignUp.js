import React from 'react';
import {
  StyledInput,
  FormLabel,
  FormButton,
  FormHeading
} from '../../globalStyles';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

import {
  SignUpContainer,
  SignUpForm,
  FormWrap,
  SignUpIcon,
  SignUpFormContent,
  Text,
  Separator,
  StyledB,
  SocialWrapper,
  SocialButton,
  TermsText,
  TextLink
} from './SignUp.elements';

const SignUp = () => {
  return (
    <>
      <SignUpContainer>

        <FormWrap>
          <SignUpIcon to="/">TAXIRICARDO</SignUpIcon>
          <SignUpFormContent>
            <SignUpForm action="#">
              <FormHeading>Create your account</FormHeading>
              <StyledInput type='email' placeholder="Email" required />
              <StyledInput type='password' placeholder="Password" required />
              <FormButton type='submit'>Register</FormButton>
              <Separator><StyledB>or</StyledB></Separator>
              <Text>Sign Up with your social media account</Text>
              <SocialWrapper>
                <SocialButton><FaGoogle/></SocialButton>
                <SocialButton><FaFacebookF/></SocialButton>
              </SocialWrapper>
              <TermsText>I agree to TAXIRICARDO
                <TextLink> Terms of Service</TextLink> and
                <TextLink> Privacy Policy</TextLink>.</TermsText>
            </SignUpForm>
          </SignUpFormContent>
        </FormWrap>
      </SignUpContainer>
    </>
  );
}

export default SignUp;