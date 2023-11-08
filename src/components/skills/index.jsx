import styled from "styled-components";
import { Container } from "../../shareComponents/share";
import StackCard from "./stackCard";
import { stackData } from "./stackData";
import { mediaQuery } from "../../style/mediaQuery";

const Skills = () => {
  return (
    <Container title="SKILLS" id="skills" bgColor="rgb(34, 34, 34)" titleColor="white">
      <GridBox>
        {stackData.map((stack) => {
          const logo = stack.logo;
          const title = stack.stackTitle;
          const description = stack.description;

          return <StackCard key={title} logo={logo} stackTitle={title} description={description} />;
        })}
      </GridBox>
    </Container>
  );
};

export default Skills;

const GridBox = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  ${mediaQuery.skills} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
