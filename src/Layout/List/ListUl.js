import styled from "styled-components";

export const ListUl = styled.ul`
  margin: 0;
  padding: 0;
  @media screen and (min-width:768px){
    margin: auto;
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (min-width:1300px){
      width: 1300px;
    }
  }

`