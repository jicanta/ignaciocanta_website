import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTitle, BoxText } from './AchievementsStyles';
import { data } from '../../constants/constants'

const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {data.map((card, id) => (
        <Box key={id}>
          <BoxTitle>{card.title}</BoxTitle>
          <BoxText>{card.description}</BoxText>
          <BoxText>{card.year}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
