import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkTitle>Contact Me</LinkTitle>
      <LinkList>
        <LinkColumn>
          <LinkItem href="mailto:ignaciocantarella@gmail.com">Email</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem href="https://github.com/jicanta">GitHub</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem href="https://www.linkedin.com/in/juan-ignacio-cantarella-57867b203/">Linkedin</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Copyright 2022 Juan Ignacio Cantarella
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/jicanta">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/juan-ignacio-cantarella-57867b203/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
