import React from 'react';
import { DiPython, DiReact, DiJsBadge, DiHaskell, DiGit } from 'react-icons/di';
import { SiCplusplus, SiHtml5 } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyles';

const Skills = () =>  (
  <Section id="skills">
    <SectionDivider />
    <br />
    <SectionTitle>Skills and Languages</SectionTitle>
    <List>
      <ListItem>
        <SiCplusplus size="3rem" />
        <ListContainer>
          <ListParagraph>5 years</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJsBadge size="3rem" />
        <ListContainer>
          <ListParagraph>2 years</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListParagraph>4 years</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListParagraph>1 year</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHaskell size="3rem" />
        <ListContainer>
          <ListParagraph>1 year</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListParagraph>3 years</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiHtml5 size="3rem" />
        <ListContainer>
          <ListParagraph>2 years</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Spanish</ListTitle>
          <ListParagraph>Native Speaker</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>English</ListTitle>
          <ListParagraph>Full Professional Proficiency</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>French</ListTitle>
          <ListParagraph>Elementary Proficiency</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Italian</ListTitle>
          <ListParagraph>Elementary Proficiency</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
