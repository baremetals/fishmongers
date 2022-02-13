import React, { ReactElement } from 'react'
// import Link from 'next/link'
import { animateScroll as scroll } from "react-scroll";
import Image from 'next/image';
import {
  FooterContainer,
  FooterWrap,
  // FooterLinkContainer,
  // FooterLinkWrapper,
  // FooterLinkItem,
  // FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./styles"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import { SiTiktok } from "react-icons/si";



function Footer(): ReactElement {

  const toggleHome = () => {
    scroll.scrollToTop();
  };
    return (
      <FooterContainer>
        <FooterWrap>
          {/* <FooterLinkContainer>
            <FooterLinkWrapper>
              <FooterLinkItem>
                <FooterLinkTitle>Bare Tutorials</FooterLinkTitle>
                <Link href="">
                  <FooterLink>Terms of Service</FooterLink>
                </Link>
                <Link href='/courses'>
                  <FooterLink>Courses</FooterLink>
                </Link>
                <Link href='/forum'>
                  <FooterLink>Forum</FooterLink>
                </Link>
                <Link href='/books'>
                  <FooterLink>Books</FooterLink>
                </Link>
                <Link href='/signin'>
                  <FooterLink>Login</FooterLink>
                </Link>
              </FooterLinkItem>

              <FooterLinkItem>
                <FooterLinkTitle>About</FooterLinkTitle>
                <Link href='/terms'>
                  <FooterLink>Terms of Service</FooterLink>
                </Link>
                <Link href='/contact-us'>
                  <FooterLink>Get in Touch</FooterLink>
                </Link>
                <Link href='/messages'>
                  <FooterLink>Chat </FooterLink>
                </Link>
                <Link href='/signup'>
                  <FooterLink>Register</FooterLink>
                </Link>
              </FooterLinkItem>
            </FooterLinkWrapper>
          </FooterLinkContainer> */}
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo onClick={toggleHome}>
                <Image
                  src='/assets/fish.svg'
                  width={80}
                  height={80}
                  alt='Fish Logo'
                />
              </SocialLogo>
              <WebsiteRights>
                Fishmongersplaice Limited {new Date().getFullYear()}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href='https://twitter.com/fishmongsplaice'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href='https://www.facebook.com/fishmongsplaice'
                  target='_blank'
                  aria-label='FaceBook'
                >
                  <FaFacebook />
                </SocialIconLink>
                {/* <SocialIconLink href='' target='_blank' aria-label='Tiktok'>
                  <SiTiktok />
                </SocialIconLink> */}
                <SocialIconLink
                  href='https://www.instagram.com/fishmongers_plaice/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </SocialIconLink>
                {/* <SocialIconLink href='' target='_blank' aria-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink> */}
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
}

export default Footer
