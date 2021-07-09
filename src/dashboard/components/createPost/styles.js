import styled from 'styled-components';

export const CreatePostContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CreatePostForm = styled.div`
  height: 95%;
  width: 95%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const CreatePostEditorContainer = styled.div`
  height: 50%;
  width: 90%;
  border: 1px solid black;

  @media (max-width: 414px) {
    height: 40%;
  }
`;

export const CreatePostInputContainer = styled.div`
  height: 25%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const CreatePostInputGroup = styled.div`
  width: 90%;
  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const CreatePostLabel = styled.label`
  height: 20%;
  width: 100%;
`;

export const CreatePostInput = styled.input`
  height: 70%;
  width: 100%;
`;
