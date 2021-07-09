import styled from 'styled-components';

export const MainBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12%;
  width: 50%;
  border-radius: 35px;
  background-color: rgb(145, 70, 172);
  color: white;
  font-size: 1.2rem;
  border: 1px solid rgb(145, 70, 172);
  transition: all 0.5s ease-in-out;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid lightgrey;
    background-color: rgb(145, 70, 172);
    color: white;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 900px) {
    width: 45%;
    height: 15%;
    margin-top: 10px;
  }
`;
MainBtn.displayName = 'MainBtn';

export const CreatePostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12%;
  max-height: 50px;
  width: 50%;
  max-width: 200px;
  border-radius: 35px;
  background-color: rgb(145, 70, 172);
  color: white;
  font-size: 1.2rem;
  border: 1px solid rgb(145, 70, 172);
  transition: all 0.5s ease-in-out;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid lightgrey;
    background-color: rgb(145, 70, 172);
    color: white;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 900px) {
    width: 45%;
    height: 15%;
    margin-top: 10px;
  }
`;
