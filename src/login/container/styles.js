import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url('../../images/login//login-image.jpg');
  background-position: top;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media (min-width: 769px) {
    background-image: none;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const LoginImageContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 769px) {
    display: inherit;
    height: 100%;
  }
`;
