import styled from "styled-components";

export const Select = styled.select`
  display: block;
  margin: auto;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 92.7%;
  height: 36px;
  border-radius: 5px;
  border: none;
  background-color: rgb(221,221,221);
  @media screen and (min-width:767px){
    display: inline;
    margin-top: 22px;
    margin-bottom: 22px;
    background-color: rgb(238,238,238);
    margin-right: 18px;
    margin-left: 18px;
    width: 150px;
    @media screen and (min-width:940px){
      width: 300px;
    }
  }
`