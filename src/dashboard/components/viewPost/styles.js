import styled from 'styled-components';

export const ViewPostContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

export const ViewPostImageContainer = styled.div`
  height: 80%;
  width: 99.5%;
  max-width: 1244px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const ViewPostTitle = styled.div`
  height: 5%;
  font-size: 2rem;
  font-weight: bold;
`;

export const ViewPostDescription = styled.div`
  /* border: 0.2px solid lightgrey; */
  min-height: 15%;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 20px 0 10px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
