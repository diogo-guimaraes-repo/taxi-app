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
import { useVerifyAccountMutation } from '../../network/verifyAccountMutation';

const VerifyAccount = () => {

  const {handleSubmit, register} = useForm();
  const [verifyAccountMutation, verifyAccountMutationResults] = useVerifyAccountMutation();
  const disableForm = verifyAccountMutationResults.loading;
  const { verification_token } = useParams();
  const onSubmit = () => verifyAccountMutation(verification_token);

  if(verifyAccountMutationResults?.data?.verifyAccount?.success)
  {
   return (
    <>
      <SignUpContainer>
        <FormWrap>
          <SignUpIcon to="/">TAXIRICARDO</SignUpIcon>
          <SignUpFormContent>
            <SignUpForm action="#">
              <FormHeading>Account verified</FormHeading>
              <Text>Please log in.</Text>
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
              <FormHeading>Click the button to verify your account</FormHeading>
              {verifyAccountMutationResults?.data?.verifyAccount?.errors?.nonFieldErrors &&
              <ErrorText>
                       {verifyAccountMutationResults?.data?.verifyAccount?.errors?.nonFieldErrors[0]["message"]}
              </ErrorText>}
              <FormButton type='submit' disabled={disableForm}>Verify Account</FormButton>
            </SignUpForm>
          </SignUpFormContent>
        </FormWrap>
      </SignUpContainer>
    </>
  );
}

export default VerifyAccount;