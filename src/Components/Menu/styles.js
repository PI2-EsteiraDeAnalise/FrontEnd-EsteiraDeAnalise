import styled from "styled-components";

export const SectionWeb = styled.div`
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px;
  }

  a {
    font-weight: 400;
    font-size: 18px;
    margin: 0 20px;
    color: #000;
    text-decoration: none;
  }

  a:hover {
    padding-bottom: 5px;
    box-shadow: inset 0 -2px 0 0 #000;
  }
`;

export const SectionMobile = styled.div`
  display: flex;
  margin: auto;
  color: black;

  a {
    font-weight: 400;
    font-size: 18px;
    color: #000;
    text-decoration: none;
  }
`;
