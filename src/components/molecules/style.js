//styling for app. mobile first. moible was up to 480px. other after 481.
//... but switched to 820px & 821 in case people rotate their phones.

import styled from "styled-components/macro";

export const BodyText = styled.div`
  font-size: 1rem;
  font-weight: 30000;
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1;
  margin: 0.15rem;

  color: #464646;
`;

export const AppLayout = styled.div`
  padding: 10px;
  display: grid;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 821px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Person = styled.div`
  @media (max-width: 820px) {
    grid-column: 1;
    grid-row: 1;
  }
  @media (min-width: 821px) {
    grid-column: 1;
    grid-row: 1 / 3;
    height: 80vh;
    display: flex;

    align-items: center;
    justify-content: center;
  }
`;
export const Weather = styled.div`
  @media (max-width: 820px) {
    grid-column: 1;
    grid-row: 2;
  }
  @media (min-width: 821px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

export const Photo = styled.div`
  @media (max-width: 820px) {
    grid-column: 1;
    grid-row: 3;
  }
  @media (min-width: 821px) {
    grid-column: 2;
    grid-row: 2;
  }
`;
export const PersonImage = styled.img`
  @media (max-width: 820px) {
    min-width: 90%;
    max-width: 91vw;
  }
  @media (min-width: 821px) {
    width: 450px;

    max-width: 49vw;
  }
`;

export const UnsplashImage = styled.img`
  max-width: 320px;
`;

export const Background = styled.div`
  border: none;

  background-color: #cfcfcf;

  //background-image: url("https://images.unsplash.com/photo-1502200893034-b7bca90610ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0MDU3OX0");

  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
`;

export const Header = styled.div`
  padding: 0;
  margin-top: 5px;
  min-height: 85px;
  max-height: 10vh;
`;

export const AboutBtn = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-family: monotype;
  color: grey;
  position: absolute;
  right: 20px;
  top: 15px;
`;
