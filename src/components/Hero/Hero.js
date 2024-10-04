import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a second year computer science student at the University of Nottingham, who is looking for a career in AI and 
        Software Engineering.
      </SectionText>
      <Button onClick = {() => window.location = "https://google.com"}>
        Learn More
      </Button>
    </LeftSection>

  </Section>
);

export default Hero;