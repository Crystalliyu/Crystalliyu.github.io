import styled from "styled-components";
import {Header, Tab} from "./HomeStyles";

export const AdminHeader = styled(Header)`
  background-color: ${({theme}) => theme.headerBg};
  margin: 0;
  align-items: center;
  padding-left: 2%;
  color: ${({theme}) => theme.font};
  font-weight: bold;
  box-sizing: border-box;
  box-shadow: ${({theme}) => theme.headerShadow};
  justify-content: space-between;
`

export const HeaderTab = styled(Tab)`
  margin-left: auto;
`

export const Name = styled.span`
  font-size: 20px;
  margin-left: 1rem;
`