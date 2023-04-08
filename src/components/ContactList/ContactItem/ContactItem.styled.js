import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #696969;
`;

export const DeleteButton = styled.button`
  padding: 8px;
  margin-left: 8px;
  background-color: #808080;
  color: white;
  border: none;
  :hover {
    background-color: #696969;
  }
  :active {
    transform: scale(0.9);
  }
`;
