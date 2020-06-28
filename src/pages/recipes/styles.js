import styled from 'styled-components';

export const RecipeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  & img {
    width: 100%;
    height: 140px;
    border-radius: 15px;
    object-fit: cover;
}
`;


