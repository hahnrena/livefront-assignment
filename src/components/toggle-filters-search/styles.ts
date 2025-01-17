import styled from "styled-components";

export const FilterGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  gap: 20px;
`;

export const ToggleButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 200px;
  height: 40px;
  &:hover {
    border: 2px solid #ff8c00;
  }
`;
