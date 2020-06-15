import React from "react";
import styled from "styled-components";
import IconClose from "./icon-close.svg";

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.75);

  position: fixed;
  margin: auto;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const Wrapper = styled.div`
  border-radius: 15px;

  background-color: #fff;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  padding: 0px;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  // background-color: white;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
`;
const CloseIcon = styled.img`
  width: 15px;
  height: 15px;
  vertical-align: center;
`;

const AboutWrapper = styled.div`
  width: 80vw;
  max-width: 450px;
  height: 50vh;
  margin: 20px;
  margin-top: 50px;
  text-align: center;
  overflow-y: auto;
`;
const AboutFoot = styled.div`
  color: #a4a4a4;
  font-size: 0.7rem;
  text-align: center;
`;

const AboutParagraph = styled.p`
  text-align: left;
  //text-align: justify;
`;

// the modal for displaying About upon clicking; props for closing on the MainPage
const AboutModal = (props) => {
  return (
    <Background>
      <Wrapper>
        <CloseButton onClick={props.closeModal}>
          <CloseIcon src={IconClose} alt="close" />
        </CloseButton>
        {/* <Content>What this is all about...</Content> */}
        <Content>
          <div>
            <AboutWrapper>
              <div>
                <h2 style={{ color: "#333333" }}>Welcome</h2>
                <b style={{ color: "#959595" }}>to empathy generator</b>
              </div>
              <br />
              <div align="center">
                <AboutParagraph>
                  Increase your own power to empathize by seeing through
                  someone's eyes.
                  <br />
                  <br />
                  In today’s tense environment, we need more understanding of
                  others. This app helps users grow their ability to empathize
                  by getting to know the daily reality of another person.
                  <br />
                  <br />
                  This app provides a window into the life of a random person
                  from around the world (Random User API). Based on that
                  person’s location, the app displays the time and weather
                  affecting that individual (Open Weather Map API). Then, based
                  on that local weather situation, an image specific to the
                  weather type and the person’s country is displayed (Unsplash
                  API).
                </AboutParagraph>
              </div>
              <br />
              <br />
              <AboutFoot>Created by Clayton</AboutFoot>
            </AboutWrapper>
          </div>
        </Content>
        {/* <div> </div> */}
      </Wrapper>
    </Background>

    // <DismissBtn onClick={props.dismissMissed}>
    //   <LilBtnDiv>OK</LilBtnDiv>
    // </DismissBtn>
  );
};

export default AboutModal;
