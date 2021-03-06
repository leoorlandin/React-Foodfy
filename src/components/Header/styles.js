import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;

`;

export const Links = styled.div`

  display: flex;
  margin-left: 100px;

& a {
  font-size: 16px;
  color: black;
  align-self: center;
  text-decoration: none;
}
& a:last-child {
  margin-left: 30px;
}
& a:hover {
  font-weight: bold;
}
`;
