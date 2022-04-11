import styled from "styled-components";

export const Section = styled.div`
  background-color: #fff;
  height: 100vh;
  border-radius: 50px 50px 0px 0px;
`;

export const TabHz = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  padding-top: 30px;
  overflow: auto;
  max-width: 80%;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabItem = styled.a`
  font-size: 25px;
  margin-right: 15px;
  font-weight: bold;
  color: #C7CBCF
`;
