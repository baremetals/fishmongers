import React, { useState } from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import MainSection from '../components/MainSection';
import ServicesCard from '../components/ServiceCard';
import {
  homeObjOne,
  homeObjTwo,
} from '../components/MainSection/Data';

import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer';
import NavDropDown from '../components/NavDropDown';
import ContactSection from '../components/ContactSection';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle: any = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>Fish Mongersplaice</title>
        <meta name='description' content='Fish Market' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <NavDropDown toggle={toggle} isOpen={isOpen} />
        <NavBar toggle={toggle} />
        <HeroSection />
        <MainSection {...homeObjOne} />
        <ServicesCard id='featured' />
        <MainSection {...homeObjTwo} />
        <ContactSection id='contact' />
        <Footer />
      </main>
    </>
  );
}
export default Home;
