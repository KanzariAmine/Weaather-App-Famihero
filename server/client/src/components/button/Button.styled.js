import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: 35%;
  background-color: #0d6efd;
  border: 2px solid #0d6efd;
  border-radius: 4px;
  color: #eee;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  & :active {
    outline-color: #fff;
  }
`;
