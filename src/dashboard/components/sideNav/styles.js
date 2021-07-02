import styled from 'styled-components';

export const SideNavContainer = styled.div`
  display: none;

  @media (min-width: 320px) {
    display: ${({ open }) => (open ? 'inherit' : 'none')};
    width: 100%;
  }

  @media (min-width: 900px) {
    display: inherit;
    display: flex;
    flex-direction: column;
    width: 20%;
    max-width: 250px;
    border-right: 0.5px solid lightgray;
  }
`;

export const SideNavTab = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.5px solid purple;
  color: ${({ active }) => (active ? 'white' : 'purple')};
  font-weight: 400;
  transition: all 0.25s ease-in-out;
  background-color: ${({ active }) => (active ? 'purple' : 'white')};

  &:hover {
    background: purple;
    color: white;
    cursor: pointer;
  }
`;

export const SideNavTabIcon = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 1.8rem;
  }
`;

export const SideNavTabTitle = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
