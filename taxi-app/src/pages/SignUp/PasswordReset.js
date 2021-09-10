import React from 'react';
import {
  StyledInput,
  FormButton,
  FormHeading
} from '../../globalStyles';

import {
  SignUpContainer,
  SignUpForm,
  FormWrap,
  SignUpIcon,
  SignUpFormContent,
  TermsText,
  TextLink
} from './SignUp.elements';

const PasswordReset = () => {
  return (
    <>
      <SignUpContainer>
        <FormWrap>
          <SignUpIcon to="/">TAXIRICARDO</SignUpIcon>
          <SignUpFormContent>
            <SignUpForm action="#">
              <FormHeading>Password reset</FormHeading>
              <StyledInput type='email' placeholder="Email" required />
              <FormButton type='submit'>Login</FormButton>
              <TermsText>
                <TextLink to="/sign-in">Return to Log In</TextLink>.
              </TermsText>
            </SignUpForm>
          </SignUpFormContent>
        </FormWrap>
      </SignUpContainer>
    </>
  );
}

export default PasswordReset;