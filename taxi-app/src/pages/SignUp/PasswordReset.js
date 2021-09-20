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
  TextLink,
  ErrorText,
  Text
} from './SignUp.elements';

import { useForm } from 'react-hook-form';
import { usePwdResetMutation } from '../../network/pwdResetMutation';

const PasswordReset = () => {

  const {handleSubmit, register} = useForm();
  const [pwdResetMutation, pwdResetMutationResults] = usePwdResetMutation();
  const disableForm = pwdResetMutationResults.loading;
  const onSubmit = (values) => pwdResetMutation(values.email);

  if(pwdResetMutationResults?.data?.sendPasswordResetEmail?.success)
  {
   return (
    <>
      <SignUpContainer>
        <FormWrap>
          <SignUpIcon to="/">TAXIRICARDO</SignUpIcon>
          <SignUpFormContent>
            <SignUpForm action="#">
              <FormHeading>E-mail was sent with success</FormHeading>
              <Text>Please check your e-mail account. Don't forget to check your spam folder!</Text>
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

  return (
    <>
      <SignUpContainer>
        <FormWrap>
          <SignUpIcon to="/">TAXIRICARDO</SignUpIcon>
          <SignUpFormContent>
            <SignUpForm onSubmit={handleSubmit(onSubmit)}>
              <FormHeading>Password reset</FormHeading>
              <StyledInput type='email' name="email" placeholder="Email" {...register('email')} required />
              {pwdResetMutationResults?.data?.sendPasswordResetEmail?.errors?.nonFieldErrors &&
              <ErrorText>
                       {pwdResetMutationResults?.data?.sendPasswordResetEmail?.errors?.nonFieldErrors[0]["message"]}
              </ErrorText>}
              {pwdResetMutationResults?.data?.sendPasswordResetEmail?.errors?.email &&
              <ErrorText>
                        {pwdResetMutationResults?.data?.sendPasswordResetEmail?.errors?.email[0]["message"]}
              </ErrorText>}
              <FormButton type='submit' disabled={disableForm}>Send Reset Password E-mail</FormButton>
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