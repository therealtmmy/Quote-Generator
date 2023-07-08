import { styled } from "styled-components";

export const Container = styled.div`
  background: white;
  width: 650px;
  height: 300px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

export const QuoteText = styled.p`
  margin: 0;
  width: 100%;
  font-size: 25px;
  font-weight: bolder;
  text-transform: capitalize;
  text-align: justify;
  text-align-last: center;
  line-height: 40px;
`;

export const AuthorText = styled.span`
  margin-top: 20px;
  width: 100%;
  display: inline-block;
  font-size: 20px;
  letter-spacing: 5px;
  text-align: center;
  color: gray;
`;

export const QuoteButton = styled.button`
  margin-top: 50px;
  border: none;
  width: 120px;
  height: 40px;
  background: black;
  color: white;
  cursor: pointer;
  font-size: 15px;
  border-radius: 5px;
`;
