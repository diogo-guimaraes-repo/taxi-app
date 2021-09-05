import React, {useState, useEffect} from 'react';
import Icon1 from '../../assets/svg-1.svg';
import Icon2 from '../../assets/svg-2.svg';
import Icon3 from '../../assets/svg-3.svg';
import {
  FeaturesContainer,
  FeaturesCard,
  FeaturesWrapper,
  FeaturesH1,
  FeaturesH2,
  FeaturesIcon,
  FeaturesP,
} from './Features.elements';

const Features = () => {
    return (
      <FeaturesContainer id="features">
        <FeaturesH1>Why Travel With Us</FeaturesH1>
        <FeaturesWrapper>
          <FeaturesCard>
            <FeaturesIcon src={Icon1}/>
            <FeaturesH2>Ecologic</FeaturesH2>
            <FeaturesP>Environmental friendly transportation</FeaturesP>
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesIcon src={Icon2}/>
            <FeaturesH2>Economy</FeaturesH2>
            <FeaturesP>We offer very good rates</FeaturesP>
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesIcon src={Icon3}/>
            <FeaturesH2>Confort</FeaturesH2>
            <FeaturesP>Enjoy the confort of our Tesla Taxis</FeaturesP>
          </FeaturesCard>
        </FeaturesWrapper>
      </FeaturesContainer>
  );
};

export default Features;