import styled from 'styled-components';
import { SharedStyles } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const SignUpContainer = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const SignUpIcon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const SignUpFormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const SignUpForm = styled.form`
  background: #fff;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 2px;
  color: #242424;
  font-size: 14px;
`;

export const TermsText = styled.span`
  text-align: center;
  margin-top: 50px;
  color: #242424;
  font-size: 11px;
`;

export const SocialWrapper = styled.div`
  width: 100%;
  font-size: 20px;
  padding-top: 10px;
  color: #fff;
  text-align: center;
  float: left;
`;

export const SocialButton = styled.button`
justify-content: center;
  font-size: 17px;
  color: white;
  height: 40px;
  width: 40px;
  background: #276926;
  border-radius: 50%;
  margin: 0px 10px;
  border: none;
  cursor: pointer;
`;

export const Separator = styled.div`
  float: left;
  width: 100%;
  border-top: 1px solid #ccc;
  text-align: center;
  margin: 50px 0 0;
`;

export const StyledB = styled.b`
  width: 40px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  background: #fff;
  display: inline-block;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  position: relative;
  top: -22px;
  z-index: 1;
`;

export const TextLink = styled(Link)`
  color: #03d3fc;
  text-decoration: none;
`;