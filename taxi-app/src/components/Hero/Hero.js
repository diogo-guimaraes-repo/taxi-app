import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button,
  StyledForm,
  StyledInput,
  FormLabel,
  FormButton,
  FormHeading
} from '../../globalStyles';

import {
  Section,
  SectionOverlay,
  HeroRow,
  HeroColumn,
  StyledFormWrapper,
  HeaderWrapper,
  HeaderBackground,
  Heading,
  Subtitle
} from './Hero.elements';

const Hero = () => {
    return (
      <Section>
        <SectionOverlay>
        <Container>
          <HeroRow>
          <HeroColumn>
              <HeaderWrapper>
                <HeaderBackground>
                  <Heading>
                    TRAVEL IN CONFORT IN YVERDON-LES-BAINS
                  </Heading>
                  <Subtitle>
                    A very nice taxi service
                  </Subtitle>
                  <Link to='/sign-up'>
                    <FormButton>
                      Create Your Account
                    </FormButton>
                  </Link>
                </HeaderBackground>
              </HeaderWrapper>
            </HeroColumn>
            <HeroColumn>
              <StyledFormWrapper>
                <StyledForm>
                  <FormHeading>Do you want to book a Taxi?</FormHeading>
                  <FormLabel>Pickup Address</FormLabel>
                  <StyledInput
                   type="text"
                    name="origin"
                    placeholder="Enter the pickup address"
                  />
                  <FormLabel>Destination Address</FormLabel>
                  <StyledInput
                    type="text"
                    name="destination"
                    placeholder="Enter the destination address"
                    />
                  <FormButton>Book Taxi</FormButton>
                </StyledForm>
              </StyledFormWrapper>
            </HeroColumn>

          </HeroRow>
        </Container>
        </SectionOverlay>
      </Section>
  );
};

export default Hero;