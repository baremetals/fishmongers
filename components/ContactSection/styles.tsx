import styled from 'styled-components';

export const MainContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }: any) => (lightBg ? '#f9f9f9' : '#929696')};
  padding-top: 8rem;
  padding-bottom: 8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  @media (max-width: 991px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export const MainWrapper = styled.div`
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const MainRow = styled.div`
  /* display: grid; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -1rem;
  margin-right: -1rem;
  grid-auto-columns: minmax(auto, 1fr);

  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

export const OpeningHoursList = styled.ul`
  list-style: none;
`;