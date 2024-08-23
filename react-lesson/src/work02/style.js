import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: lightgray;
  color: black;
  width: 100%;
  height: 100%;
  padding: 2rem;

  #title {
    font-size: 3rem;
  }

  #input-box {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .input-row {
      width: 22rem;
      display: flex;
      justify-content: space-between;

      label {
        align-items: center;
        display: flex;
        font-weight: bold;
      }

      input {
        border-radius: 0.4rem;
        padding: 0.4rem;
      }
    }

    #enter-btn {
      padding: 0.4rem;
      border-radius: 0.4rem;
      background-color: green;
      color: white;
      font-weight: bold;
      width: 100%;
      text-align: center;
      cursor: pointer;
      margin-top: 1rem;
    }
  }

  #product-list {
    margin-top: 4rem;
    gap: 3rem;

    .product {
      display: flex;
      flex-direction: column;
      width: 50vw;

      & > div {
        gap: 1.4rem;
      }
    }

    #calc-btn {
      padding: 0.4rem 2rem;
      border-radius: 0.4rem;
      border: 3px solid green;
      color: green;
      font-weight: bold;
      width: fit-content;
      text-align: center;
      cursor: pointer;
      margin-top: 0.4rem;
    }
  }
`;
