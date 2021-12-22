import styled from "styled-components";
import {Header, Tab} from "./HomeStyles";

export const AdminHeader = styled(Header)`
  background-color: white;
  margin: 0;
  align-items: center;
  padding-left: 2%;
  color: black;
  font-weight: bold;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(226, 229, 234, 0.35);
  justify-content: space-between;
`

export const HeaderTab = styled(Tab)`
  margin-left: auto;
`

export const Name = styled.span`
  font-size: 20px;
  margin-left: 1rem;
`