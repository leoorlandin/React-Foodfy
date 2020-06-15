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



export const RecipeItem = styled.div`

  margin-top: 30px;



  & :nth-child(2) {
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0 5px 0;
  }

& :nth-child(3) {
  font-size: 14px;
  font-weight: normal;
  color: #777777;
}

`;
