import styled from 'styled-components';

export const ToggleNavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 5vh;
  width: 100%;
  svg {
    font-size: 2rem;
    color: purple;
  }
  @media (min-width: 900px) {
    display: none;
  }
`;
