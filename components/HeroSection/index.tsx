import React, { useState } from 'react'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./styles";

import { Button } from "../styles"

const HeroSection = ({ ...props }: any ) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
      <HeroContainer id='home'>
        <HeroBg>
          <VideoBg
            playsInline
            autoPlay
            loop
            muted
            src=''
            type='video/mp4'
            {...props}
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>Fishmongers Plaice</HeroH1>
          <HeroP>traditional fishmonger</HeroP>
          <HeroBtnWrapper>
            <Button
              {...props}
              to='contact'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
}

export default HeroSection
