import styled from "styled-components";

export default function ProjectCard(props) {
  const { name, desc, website, technologies } = props.project;
  return (
    <CardWrapper>
      <Card>
        <CardImage src="https://source.unsplash.com/random/240x120" />
        <CardTitle>{name}</CardTitle>
        <CardBody>{desc}</CardBody>
        <Overlay className="overlay">
          <CardTitle>{name}</CardTitle>
          <CardBody>{desc}</CardBody>
          <Technologies>
            {technologies.map((technologly, index) => (
              <Technologly key={name + index}>
                <span>{technologly}</span>
              </Technologly>
            ))}
          </Technologies>
          <Button href={website}>Demo</Button>
        </Overlay>
      </Card>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  position: relative;
  height: 20rem;
  width: 18rem;
  &::before {
    content: "";
    top: 0;
    left: 1rem;
    display: block;
    border-top: 1.5rem solid #6dcac8;
    border-radius: 1rem;
    position: absolute;
    width: 16rem;
    transform: translateY(-50%);
    z-index: -1;
  }
`;
const Card = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  color: #c7d0cc;
  border-radius: 0.5rem;
  background-color: #2b3443;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  &:hover .overlay {
    transform: translateY(0);
  }
`;
const CardImage = styled.img`
  border-radius: 1rem;
`;
const CardTitle = styled.h4``;
const CardBody = styled.p``;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  color: #c7d0cc;
  background-color: #2b3443;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  transform: translateY(100%);
`;

const Button = styled.a`
  height: 3rem;
  text-decoration: none;
  width: 100%;
  background-color: hsl(218 22% 18%);
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6dcac8;
  &:hover {
    background-color: hsl(218 22% 40%);
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Technologly = styled.div`
  padding: 0.5rem;
  border: 0.2rem solid #6dcac8;
  border-radius: 1rem;
  height: 2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6dcac8;
`;
