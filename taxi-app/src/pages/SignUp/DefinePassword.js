import React from 'react';
import { useParams } from 'react-router-dom';
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
import { usePwdChangeMutation } from '../../network/pwdChangeMutation';

const DefinePassword = () => {

  const {handleSubmit, register} = useForm();
  const [pwdChangeMutation, pwdChangeMutationResults] = usePwdChangeMutation();
  const disableForm = pwdChangeMutationResults.loading;
  const { reset_token } = useParams();
  const onSubmit = (values) => pwdChangeMutation(reset_token,
                                                 values.password1,
                                                 values.password2);

  if(pwdChangeMutationResults?.data?.passwordReset?.success)
  {
   return (
    <>
      <SignUpContainer>
        <FormWrap>
          <SignUpIcon to="/">TAXIRICARDO</SignUpIcon>
          <SignUpFormContent>
            <SignUpForm action="#">
              <FormHeading>Password change with success</FormHeading>
              <Text>Please log in with your new password!</Text>
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
              <FormHeading>Define your new password</FormHeading>
              <StyledInput type='password' name="password1" placeholder="New password" {...register('password1')} required />
              <StyledInput type='password' name="password2" placeholder="Confirm your new password" {...register('password2')} required />
              {pwdChangeMutationResults?.data?.passwordReset?.errors?.nonFieldErrors &&
              <ErrorText>
                       {pwdChangeMutationResults?.data?.passwordReset?.errors?.nonFieldErrors[0]["message"]}
              </ErrorText>}
              {pwdChangeMutationResults?.data?.passwordReset?.errors?.newPassword2 &&
              <ErrorText>
                        {pwdChangeMutationResults?.data?.passwordReset?.errors?.newPassword2[0]["message"]}
              </ErrorText>}
              <FormButton type='submit' disabled={disableForm}>Set New Password</FormButton>
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

export default DefinePassword;