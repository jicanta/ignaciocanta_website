import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center> 
        Juan Ignacio Cantarella
      </SectionTitle>
      <SectionText>
        Hello! I'm Nacho, a student of both Software Engineering and Computer Science.
        I enjoy <a href="https://en.wikipedia.org/wiki/Competitive_programming">competitive programming</a>, 
        and problem solving in general.
      </SectionText>
      {/* <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>  */}
    </LeftSection>
  </Section>
);

export default Hero;