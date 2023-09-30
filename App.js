import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import styled from "styled-components";
import "./styles.css";

export default function App() {
  return (
    <Container>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
