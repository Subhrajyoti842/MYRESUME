import styled from "styled-components";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper>
      <FooterText>
        <a href="/">subhrajyoti.tech</a> &copy; {currentYear} |{" "}
        <span>All Rights Reserved.</span>
      </FooterText>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-top: auto;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(218 22% 18%);
  border-bottom: 0.2rem solid #6dcac8;
  text-align: center;
`;

const FooterText = styled.div`
  & a {
    color: #6dcac8;
    text-decoration: none;
  }
  & a:hover {
    color: hsl(179deg 47% 40%);
  }
`;
