import styled from "styled-components";

export const Wrapper = styled.div`
  color: black;
  width: 100%;
  margin: 2rem 0;

  #list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .p-box {
      display: flex;
      flex-direction: row;
      border: 1px solid black;
      border-radius: 0.6rem;
      background-color: white;
      padding: 2rem;
      cursor: pointer;
      gap: 1rem;

      img {
        height: 7rem;
      }
    }
  }

  #purchase-box {
    #p-title {
      font-size: 3rem;
    }

    #p-btn {
      background-color: orange;
      border-radius: 1rem;
      text-align: center;
      padding: 1rem;
    }
  }
`;
