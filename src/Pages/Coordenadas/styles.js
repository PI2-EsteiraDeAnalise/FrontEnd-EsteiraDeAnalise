import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container-img {
    display: flex;
    justify: content;
    align-items: center;
    margin: 40px auto;
  }

  .container-border {
    width: 1280px;
    height: 720px;
    border: 4px solid #7459d9;
    border-radius: 10px;
  }

  .container-img img {
    width: 100%;
    height: 100%;
  }

  .container-coord {
    background-color: #7459d9;
    border: 1px solid;
    border-radius: 5px;
    margin: 0 auto 20px auto;
    width: 40%;
    height: 75vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    p {
      margin: 20px 0;
      max-width: 325px;
      color: white;
      font-weight: bold;
    }

    .container-coord-input {
      display: flex;
      max-height: 60vh;
      overflow-y: auto;
      align-items: left;
      justify-content: left;
      width: 80%;
      flex-direction: column;
    }

    .container-coord-input .title-coord {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .container-coord-input .container-coord-input-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .container-coord-input-item .text-input-coord {
      width: 100%;
      margin-bottom: 8px;
    }

    .text-input-coord input {
      width: 100%;
      border: 1px solid black;
      border-radius: 5px;
      line-height: 30px;
      height: 30px;
      color: black;
      padding-left: 8px;
    }

    .text-input-coord input::placeholder {
      color: black;
      opacity: 1;
      font-weight: bold;
    }

    .container-coord-input-item .first-input-coord {
      display: flex;
      flex-direction: row;
    }

    .container-coord-input-item .second-input-coord {
      display: flex;
      flex-direction: row;
    }

    .container-coord-input .coord-text {
      margin: 0 0 8px 0;
      width: 95%;
      background-color: white;
      color: black;
      text-align: center;
      line-height: 30px;
      height: 30px;
      border: 1px solid black;
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 830px) {
    margin-top: 12px;
    flex-direction: column;

    .container-coord {
      height: 60vh;
    }
  }

  @media screen and (max-width: 500px) {
    margin-top: 15px;
    flex-direction: column;

    .container-img {
      width: 80%;
    }

    .container-coord {
      width: 60%;
      height: 40vh;
    }
  }

  @media screen and (max-width: 370px) {
    margin-top: 5px;
    flex-direction: column;

    .container-img {
      width: 90%;
    }

    .container-coord {
      width: 80%;
    }
  }
`;
