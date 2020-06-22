import styled from 'styled-components';

export const Presentation = styled.div`


  background: #FBDFDB;
  height: 50vh;
  border-radius: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;

  @media(max-width: 1112px){
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
  }

  & img {
  align-self: flex-end;
  margin-right: 100px;

  @media(max-width: 1112px){
    align-self: center;
    margin-top: 25px;
  }
}
`;


export const PresentationText = styled.div`

  width: 316px;
  margin: auto 60px;

  & h1{
      font-weight: bold;
      font-size: 32px;
      line-height: 42px;
  }

  & h2 {
    font-weight: normal;
    opacity: 0.7;
    font-size: 18px;
    line-height: 28px;
  }
`;

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


