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
  LargeFormWrapper,
  HeroSingleColumn,
} from './Hero.elements';

const HeroClient = () => {
    return (
      <Section>
        <SectionOverlay>
        <Container>
          <HeroRow>
            <HeroSingleColumn>
              <LargeFormWrapper>
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
                  <Link to='/sign-in'>
                    <FormButton>Book Taxi</FormButton>
                  </Link>
                </StyledForm>
              </LargeFormWrapper>
            </HeroSingleColumn>
          </HeroRow>
        </Container>
        </SectionOverlay>
      </Section>
  );
};

export default HeroClient;