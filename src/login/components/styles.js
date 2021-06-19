import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 80%;
  color: white;
`;

export const LoginFormInputGroup = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (min-height: 1025px) {
    height: 70%;
  }
`;

export const LoginFormHeading = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  @media (min-width: 769px) {
    color: black;
  }
  @media (min-width: 900px) {
    font-size: 4rem;
  }
`;

export const LoginFormSubHeading = styled.h2`
  font-size: 1.8rem;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 769px) {
    color: black;
  }
`;

export const LoginFormInput = styled.input`
  background-color: rgba(255, 255, 255, 0.08);
  height: 13%;
  width: 80%;
  max-height: 70px;
  max-width: 600px;
  border: 1px solid purple;
  border-radius: 35px;
  color: white;
  padding: 3%;
  font-size: 1.5rem;
  font-weight: 400;
  &:focus {
    color: white;
    outline: none;
  }
  @media (min-width: 768px) {
    width: 70%;
    font-size: 2rem;
  }

  @media (min-width: 900px) {
    margin-top: 10px;
    height: 15%;
    width: 60%;
    font-size: 1.8rem;
    color: black;
    &:focus {
      color: black;
    }
  }

  @media (min-width: 1025px) {
    height: 15%;
    width: 80%;
    max-width: 400px;
  }
`;
