import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
export default function About() {
  return (
    <Wrapper id="section_1">
      <AboutLeft>
        <h2>Hi, I'm Subhrajyoti Singha Roy</h2>
        <h3>FrontEnd Developer</h3>
        <p>
          Through constant practice & learning, I produce aesthetic software to
          an extremely high standard.
        </p>
      </AboutLeft>
      <AboutRight>
        <ProfileImage
          src="https://source.unsplash.com/random/200x200"
          alt="profile"
          width="200"
          height="200"
        />
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={["far", "envelope"]} size="2x" />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
          </li>
        </ul>
      </AboutRight>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (min-width: 991px) {
    flex-direction: row;
    padding-top: 8rem;
  }
`;

const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    font-size: 2.875rem;
    line-height: 1;
    margin-bottom: 0.5rem;
    text-align: center;
    @media (max-width: 576px) {
      font-size: 2rem;
    }
  }
  & h3 {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
    color: rgb(119, 119, 121);
    text-align: center;
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }

  & p {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.3rem;

    @media (min-width: 991px) {
      margin-bottom: 0px;
    }
  }
`;

const AboutRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & ul {
    display: flex;
    list-style: none;
  }
  & li {
    padding: 1rem;
  }
  & li a {
    color: var(--downy-color);
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 0.9rem solid #212e3d;
  box-shadow: 0 0 0 0.3rem #6dcac8;
`;
