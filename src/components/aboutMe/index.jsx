import styled from "styled-components";
import { Container } from "../../shareComponents/share";
import Profile from "./profile";
import Education from "./education";
import Career from "./carrer";

const AboutMe = () => {
  return (
    <Container title="ABOUT ME">
      <SectionContainer>
        <Profile />
        <Education />
        <Career />
      </SectionContainer>
    </Container>
  );
};

export default AboutMe;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;
