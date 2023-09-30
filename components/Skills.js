import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data";
import styled from "styled-components";
import { Heading } from "./utils";
export default function Skills() {
  return (
    <Wrapper id="section_2">
      <Heading title="Skills" />
      <Technologies>
        <ul>
          {data[0].skills.map((item) => (
            <li key={item.id}>
              <div className="skill__name">{item.name}</div>
              <div className="skill__icon">
                <FontAwesomeIcon
                  icon={item.icon}
                  size="4x"
                  color={item.color}
                />
              </div>
              <ProgressBar color={item.color} fill={item.percentFill} />
            </li>
          ))}
        </ul>
      </Technologies>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 1rem;
`;

const Technologies = styled.div`
  & ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 330px) {
      justify-content: center;
    }
  }
  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    width: 8rem;
    background-color: #2b3443;
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

const ProgressBar = styled.div`
  height: 0.3rem;
  width: 100%;
  background-color: #0a0c0f;
  position: relative;
  border-radius: 18%;
  &::after {
    content: "";
    display: block;
    background-color: ${(props) => props.color};
    width: ${(props) => props.fill + "%"};
    height: 0.3rem;
    position: absolute;
  }
`;
