import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <Footer>
      <LinkList>
        <LinkColumn>
        <LinkTitle>
        Call
        </LinkTitle>
        <LinkItem href = "tel:+447407142786">
        +447407142786
        </LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>
        Call
        </LinkTitle>
        <LinkItem href = "mailto:namtonthat50@gmail.com">
        namtonthat50@gmail.com
        </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Slogan...
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href = "https://github.com">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://linkedin.com">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://instagram.com">
        <AiFillInstagram size = "3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
      </Footer>

  );
};

export default Footer;
