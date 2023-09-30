import { useState } from "react";
import styled from "styled-components";
import { Heading } from "./utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const canSubmit = [name, email, message].every(Boolean);
  return (
    <Wrapper>
      <Heading title="Contact" />
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <span>Name</span>
        </Label>
        <Label htmlFor="email">
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <span>Email</span>
        </Label>
        <Label htmlFor="message">
          <TextArea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
          <span>Message</span>
        </Label>
        <Input type="submit" value="Submit" disabled={!canSubmit} />
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  background-color: #2b3443;
  width: 90vw;
  max-width: 768px;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  position: relative;
  &::before {
    content: "";
    top: 0;
    left: 5vw;
    display: block;
    border-top: 1.5rem solid #6dcac8;
    border-radius: 1rem;
    position: absolute;
    width: 80vw;
    max-width: 700px;
    transform: translateY(-50%);
    z-index: -1;
    @media (min-width: 768px) {
      left: 34px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 0;
  margin-top: 1rem;
  background-color: hsl(218 22% 18%);
  color: #6dcac8;
  border: none;
  outline: none;
  &[type="submit"] {
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 0.5rem;
  }

  &[type="submit"]:not(:disabled):hover {
    background-color: hsl(218 22% 40%);
  }
  &::placeholder {
    opacity: 0;
  }

  &:not(:placeholder-shown) + span {
    color: #6dcac8;
    transform: translateY(-0.4rem);
  }
`;

const Label = styled.label`
  margin-bottom: 1rem;
  position: relative;
  border-bottom: 0.1rem solid #6dcac8;

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(2rem);
    font-size: 0.825em;
    transition-duration: 300ms;
  }

  &:focus-within > span {
    color: #6dcac8;
    transform: translateY(-0.4rem);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 0;
  margin-top: 1rem;
  background-color: hsl(218 22% 18%);
  color: #6dcac8;
  border: none;
  outline: none;
  vertical-align: top;
  &::placeholder {
    opacity: 0;
  }

  &:not(:placeholder-shown) + span {
    color: #6dcac8;
    transform: translateY(-0.4rem);
  }
`;
