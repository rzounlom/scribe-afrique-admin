import styled from 'styled-components';

export const AlertContainer = styled.div`
  height: 5vh;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  font-size: 1.2rem;
  border-radius: 10px;
  color: white;
  margin-bottom: 10px;
  display: ${({ show }) => (show ? 'absolute' : 'none')};
  background-color: ${({ type }) =>
    type === 'error' ? 'red' : type === 'success' ? 'green' : 'lightblue'};
  padding: 0 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const AlertAction = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const AlertMessageContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-right: 5px;
    font-size: 1.5rem;
    align-self: center;
    font-weight: 900;
  }
`;
