import React from 'react';
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
import { useRegisterMutation } from '../../network/registerMutation';

const SignUp = ({loading}) => {
const {register, handleSubmit} = useForm();
const [registerMutation, registerMutationResults] = useRegisterMutation();
const disableForm = registerMutationResults.loading || loading;
const onSubmit = (values) => registerMutation(values.email,
                                              values.password,
                                              values.firstname,
                                              values.lastname,
                                              values.phonenumber);

  return (
    <>
      <SignUpContainer>
        <FormWrap>
          <SignUpIcon to="/">TAXIRICARDO</SignUpIcon>
          <SignUpFormContent>
            <SignUpForm onSubmit={handleSubmit(onSubmit)}>
              <FormHeading>Create your account</FormHeading>
              <StyledInput type='text' name="firstname" placeholder="First Name" {...register('firstname')} required />
              <StyledInput type='text' name="lastname" placeholder="Last Name" {...register('lastname')} required />
              <StyledInput type='email' name="email" placeholder="Email" {...register('email')} required />
              {registerMutationResults?.data?.register?.errors?.username && <ErrorText>This e-mail already exists.</ErrorText>}
              <StyledInput type='tel' name="phonenumber" placeholder="Phone Number" {...register('phonenumber')} patern="[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}" required />
              {registerMutationResults?.data?.register?.errors?.phoneNumber && <ErrorText>
                                                                                  {registerMutationResults?.data?.register?.errors?.phoneNumber[0]["message"]}
                                                                                </ErrorText>}
              <StyledInput type='password' name="password" placeholder="Password" {...register('password')} required />
              {registerMutationResults?.data?.register?.errors?.password2 && <ErrorText>
                                                                                {registerMutationResults?.data?.register?.errors?.password2[0]["message"]}
                                                                              </ErrorText>}
              <FormButton type='submit' disabled={disableForm}>Register</FormButton>
              <Separator><StyledB>or</StyledB></Separator>
              <Text>Sign Up with your social media account</Text>
              <SocialWrapper>
                <SocialButton><FaGoogle/></SocialButton>
                <SocialButton><FaFacebookF/></SocialButton>
              </SocialWrapper>
              <TermsText>I agree to TAXIRICARDO
                <TextLink> Terms of Service</TextLink> and
                <TextLink> Privacy Policy</TextLink>.
              </TermsText>
              <Text>Already have an account? <TextLink to="/sign-in"> Sign In</TextLink>.</Text>
            </SignUpForm>
          </SignUpFormContent>
        </FormWrap>
      </SignUpContainer>
    </>
  );
}

export default SignUp;