import styled from "styled-components";

export const Container = styled.div`
  margin: 0 10px;
  padding: 0 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: block;
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px;
  outline-color: #0d6efd;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 10px;
`;
