import styled from 'styled-components';

export const DashboardContentContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    width: 85%;
  }

  @media (min-width: 1400px) {
    min-width: 87%;
  }
`;
