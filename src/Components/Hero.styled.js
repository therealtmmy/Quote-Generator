import { styled } from "styled-components";

export const Container = styled.div`
  background: white;
  width: 650px;
  height: 400px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const QuoteText = styled.h1`
  width: 450px;
  text-transform: capitalize;
  line-height: 40px;
`;

export const ParaGraph = styled.p`
  letter-spacing: 5px;
  font-size: 25px;
  color: red;
`;

export const QuoteButton = styled.button`
  border: none;
  width: 120px;
  height: 40px;
  background: black;
  color: white;
  cursor: pointer;
  font-size: 15px;
`;
