import React from "react";
import logo from "./logo.svg";
import { Text, Button } from "./lib/syn-brand";
import { RenderType } from "./lib/syn-brand/Text";
import styled from "styled-components";
import "./App.css";
import "@fortawesome/fontawesome-free/js/all.js";

function App() {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo src={"logo.png"} />
          <HeaderNav>
            <Text type={RenderType.Nav}>About Us</Text>
            <Text type={RenderType.Nav}>Services</Text>
            <Text type={RenderType.Nav}>Our Work</Text>
            <Button>Let's Get Started!</Button>
          </HeaderNav>
        </HeaderContent>
      </Header>
      <Page>
        <Panel>
          <PanelText>
            <Text type={RenderType.Heading}>
              Exceptional Services For Exceptional Customers
            </Text>
            <Text type={RenderType.Tagline}>We turn ideas into realities!</Text>

            <Text>
              We are a Canadian development team and software boutique for
              founders looking to build their ideas and team.
            </Text>
            <Button>Hire Us</Button>
          </PanelText>
          <PanelHero>
            <PanelHeroImage src={"building_websites.svg"} />
          </PanelHero>
        </Panel>
        <Panel>
          <PanelHero>
            <PanelHeroImage src={"progressive_app.svg"} />
          </PanelHero>
          <PanelText right>
            <Text type={RenderType.Heading}>
              We Build Jaw-Dropping Web & Mobile Experiences
            </Text>
            <Text type={RenderType.Tagline}>
              Our founders each have over 10 years experience in a variety of
              technology industries
            </Text>

            <Text>
              Our pursuit of quality reaches further than providing a high-value
              product and service. We pay attention to every detail and dedicate
              time and effort to provide our customers with the best working
              experience.
            </Text>
          </PanelText>
        </Panel>
        <Panel center>
          <PanelText>
            <Text type={RenderType.Heading}>Your idea built with</Text>
            <LogoList>
              <i className="fab fa-react"></i>
              <i className="fab fa-windows"></i>
              <i className="fab fa-apple"></i>
              <i className="fab fa-android"></i>
              <i className="fab fa-node"></i>
            </LogoList>
            <Button center>Learn More</Button>
          </PanelText>
        </Panel>
      </Page>
      <Footer>
        <FooterContent>
          <FooterColumn>
            <Text type={RenderType.Tagline}>Contact</Text>
            <Text type={RenderType.Heading}>Let's build together!</Text>
            <Button>Hire Us</Button>
          </FooterColumn>
          <FooterColumn>
            <Text type={RenderType.Tagline}>ABOUT</Text>
            <Text>Why us</Text>
            <Text>Our values</Text>
            <Text>Playbook</Text>
          </FooterColumn>
          <FooterColumn>
            <Text type={RenderType.Tagline}>SERVICES</Text>
            <Text>Development</Text>
            <Text>Consulting</Text>
            <Text>Managed Services</Text>
          </FooterColumn>
          <FooterColumn>
            <Text type={RenderType.Tagline}>OUR WORK</Text>
            <Text>Case Studies</Text>
            <Text>Clients</Text>
            <Text>Blog</Text>
          </FooterColumn>
        </FooterContent>
        <FooterLegal>
          <div>Call us: (123) 4567-8901</div>
          <div>Copyright © 2021 The Syndicate. All rights reserved</div>
        </FooterLegal>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Raleway";
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100vw;
  height: 120px;
  position: fixed;
  background: white;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: center;
`;
const HeaderContent = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 80vw;
  max-width: 1200px;
`;
const HeaderNav = styled.div`
  justify-content: space-between;
  width: 400px;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  display: flex;
`;

const Logo = styled.img`
  width: auto;
  height: 200px;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Panel = styled.div<{ center?: boolean }>`
  flex-direction: row;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  flex-wrap: nowrap;
  display: flex;
  margin: 300px 0 0px;
`;

const PanelText = styled.div<{ right?: boolean }>`
  max-width: 50%;
  text-align: ${({ right }) => (right ? "right" : "left")};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PanelHero = styled.div``;

const PanelHeroImage = styled.img`
  width: auto;
  height: 300px;
`;

const LogoList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  svg {
    font-size: 50px;
    color: #c3c4c5;
  }
`;

const Footer = styled.div`
  margin-top: 200px;
  height: 500px;
  background: #f4f4f4;

  padding-top: 100px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;
const FooterLegal = styled(FooterContent)`
  margin-top: 140px;
`;
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export default App;
