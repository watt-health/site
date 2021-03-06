import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center center;
`;

export const CardBody = styled.div`
  background: rgba(255, 255, 255, 0.8);
  min-height: 33%;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  p {
    font-size: 2rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardLeft = styled.div`
`;

export const CardRight = styled.div`
`;
