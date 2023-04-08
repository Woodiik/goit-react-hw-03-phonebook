import styled from '@emotion/styled';

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const AddContactButton = styled.button`
  padding: 8px;
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
