import styled from "styled-components";

export const Slip = styled.div`
  transition-duration: 1s;
  position: relative;
  top: ${props => props.Cli ? 85 : 135 }px;
`