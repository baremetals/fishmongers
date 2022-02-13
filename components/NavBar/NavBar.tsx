import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll"
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from 'next/image';
import {
  Nav,
  NavLink,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBarContainer,
  NavItem,
} from "./NavBar.styles";


export default function NavBar({ toggle, ...props }: any) {
  const [scrcollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else setScrollNav(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  })

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <Nav scrollNav={scrcollNav} {...props}>
      <NavBarContainer>
        <Link href='/' passHref>
          <NavLogo onClick={toggleHome}>
            <Image
              src='/assets/fish.svg'
              width={80}
              height={80}
              alt='Fish Logo'
            />
          </NavLogo>
        </Link>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              {...props}
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact='true'
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              {...props}
              to='featured'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact='true'
            >
              Featured
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              {...props}
              to='products'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact='true'
            >
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              {...props}
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact='true'
            >
              Contact
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <Link href='/auth/signin'>
              <NavLink
                {...props}
                to='/auth/signin'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact='true'
              >
                Login
              </NavLink>
            </Link>
          </NavItem> */}
        </NavMenu>
        <NavBtn>
          <NavLink
            {...props}
            to='contact'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            exact='true'
          >
            <NavBtnLink>Get In Touch</NavBtnLink>
          </NavLink>
        </NavBtn>
      </NavBarContainer>
    </Nav>
  );
}
