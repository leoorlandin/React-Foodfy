import styled from 'styled-components';

export const Presentation = styled.div`


  background: #FBDFDB;
  height: 50vh;
  border-radius: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;

  & img {
  align-self: flex-end;
  margin-right: 100px;
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

