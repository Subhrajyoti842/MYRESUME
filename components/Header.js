import styled from "styled-components";
import { useScrollPos } from "../Hooks/useScrollPos";
import ScrollspyNav from "react-scrollspy-nav";
export default function Header() {
  const scrollPos = useScrollPos();
  return (
    <Wrapper>
      <Navigation scrollPos={scrollPos}>
        <ScrollspyNav
          scrollTargetIds={["section_1", "section_2", "section_3"]}
          offset={-50}
          activeNavClass="is-active"
          scrollDuration="500"
        >
          <LinksList>
            <LinkItem>
              <a href="#section_1">About</a>
            </LinkItem>
            <LinkItem>
              <a href="#section_2">Skills</a>
            </LinkItem>
            <LinkItem>
              <a href="#section_3">Projects</a>
            </LinkItem>
          </LinksList>
        </ScrollspyNav>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Navigation = styled.nav`
  background-color: ${(props) => (props.scrollPos ? " #2b3443" : "")};
  border-bottom: ${(props) => (props.scrollPos ? " 0.2rem solid #6dcac8" : "")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  width: 100%;
  max-width: 1000px;
  transition: all 0.5s;
  @media (min-width: 991px) {
    padding: 0.5rem 1vw;
  }
`;

const Logo = styled.img`
  width: 6rem;
  height: 3rem;
`;
const LinksList = styled.ul`
  list-style: none;
  display: flex;
`;
const LinkItem = styled.li`
  padding: 1vw;

  & a {
    color: var(--text-color);
    text-decoration: none;
  }
  & a.is-active {
    border-bottom: solid 3px var(--downy-color);
  }

  & a::after {
    display: block;
    content: "";
    border-bottom: solid 3px var(--downy-color);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  & a:hover::after {
    transform: scaleX(1);
  }
`;
