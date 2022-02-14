import React from 'react'
import {
  ServiceSection,
  ServiceContainer,
  ServiceH1,
  ServiceWrapper,
  ServicesColumn,
  ServicesCard,
  ServiceIcon,
  ServiceH2,
  ServiceP,
} from "./styles";

const ServiceCard = ({id, ...props}:any) => {
  return (
    <ServiceSection id={id} {...props}>
      <ServiceContainer>
        <ServiceH1>Explore Fishmongers Plaice </ServiceH1>
        <ServiceWrapper>
          <ServicesColumn>
            <ServicesCard>
              <ServiceIcon src="/assets/oysters.jpg" />
              <ServiceH2>Oysters & Cavier</ServiceH2>
              <ServiceP></ServiceP>
            </ServicesCard>
          </ServicesColumn>

          <ServicesColumn>
            <ServicesCard>
              <ServiceIcon src="/assets/crab.jpg" />
              <ServiceH2>Crabs & Lobsters</ServiceH2>
              <ServiceP></ServiceP>
            </ServicesCard>
          </ServicesColumn>

          <ServicesColumn>
            <ServicesCard>
              <ServiceIcon src="/assets/tigerprawns.jpg" />
              <ServiceH2>Assorted Prawns</ServiceH2>
              <ServiceP></ServiceP>
            </ServicesCard>
          </ServicesColumn>
        </ServiceWrapper>
      </ServiceContainer>
    </ServiceSection>
  );
};

export default ServiceCard
