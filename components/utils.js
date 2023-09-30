import styled from "styled-components";

function Heading({ title }) {
  return (
    <Wrapper>
      <SquareDot />
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const SquareDot = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  background-color: var(--downy-color);
  border: 0.1rem solid var(--primary-color);
  box-shadow: 0 0 0 0.1rem var(--downy-color);
`;

const Title = styled.h3`
  padding-left: 1rem;
`;

export { Heading };
