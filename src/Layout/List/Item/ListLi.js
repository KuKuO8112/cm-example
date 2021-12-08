import styled from "styled-components";

export const ListLi = styled.li`
  width: 384px;
  height: 200px;
  overflow:hidden;
  background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${props => props.Pic});
  background-size: ${props => props.Cli ? 105 : 100 }%;
  transition-duration: 1s;
  margin: auto;
  margin-top: 8px;
  margin-bottom: 8px;
  @media screen and (min-width:768px){
    max-width: 370px;
  }
`