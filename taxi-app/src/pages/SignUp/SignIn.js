import React from 'react';
import { Redirect } from 'react-router';
import {
  StyledInput,
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
  TextLink,
  ErrorText
} from './SignUp.elements';

import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../../network/loginMutation';

const SignIn = ({loading}) => {

  const {handleSubmit, register} = useForm();
  const [loginMutation, loginMutationResults] = useLoginMutation();
  const disableForm = loginMutationResults.loading || loading;
  const onSubmit = (values) => loginMutation(values.email, values.password);

  if(loginMutationResults?.data?.tokenAuth?.success)
  {
   return <Redirect to='/home'/>
  }

  return (
    <>
      <SignUpContainer>
        <FormWrap>
          <SignUpIcon to="/">TAXIRICARDO</SignUpIcon>
          <SignUpFormContent>
            <SignUpForm onSubmit={handleSubmit(onSubmit)}>
              <FormHeading>Log in to your account</FormHeading>
              <StyledInput type='email' name="email" placeholder="Email" {...register('email')} required />
              <StyledInput type='password' name="password" placeholder="Password" {...register('password')} required />
              {loginMutationResults?.data?.tokenAuth?.errors?.nonFieldErrors && <ErrorText>
                                                                                  {loginMutationResults?.data?.tokenAuth?.errors?.nonFieldErrors[0]["message"]}
                                                                         </ErrorText>}
              <FormButton type='submit' disabled={disableForm}>Login</FormButton>
{/*
              <Separator><StyledB>or</StyledB></Separator>
              <Text>Log in with your social media account</Text>
              <SocialWrapper>
                <SocialButton><FaGoogle/></SocialButton>
                <SocialButton><FaFacebookF/></SocialButton>
              </SocialWrapper>
*/}
              <TermsText>
                <TextLink to="/password-reset">Forgot your password?</TextLink>
              </TermsText>
              <Text>Don't have an account? <TextLink to="/sign-up"> Sign Up</TextLink>.</Text>
            </SignUpForm>
          </SignUpFormContent>
        </FormWrap>
      </SignUpContainer>
    </>
  );
}

export default SignIn;