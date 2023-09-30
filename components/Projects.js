import styled from "styled-components";
import data from "../data";
import ProjectCard from "./ProjectCard";
import { Heading } from "./utils";
export default function Projects() {
  return (
    <Wrapper id="section_3">
      <Heading title="Projects" />
      <Cards>
        {data[1].projects.map((project) => (
          <ProjectCard key={project.id + project.name} project={project} />
        ))}
      </Cards>
    </Wrapper>
  );
}

const Wrapper = styled.section``;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 1rem;
  @media (max-width: 610px) {
    justify-content: center;
  }
`;
