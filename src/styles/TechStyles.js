import {PageWrapper} from "./CommonStyles";
import homeBg from "../assets/homeBg.png";
import styled from "styled-components";
import {Menu} from "antd";

const { SubMenu } = Menu;

export const Background = styled(PageWrapper)`
  background-image: url(${homeBg});
  background-size: cover;
`

export const StackMenu = styled(Menu)`
  background-color: transparent;
`

export const SubStackMenu = styled(SubMenu)`
  background-color: transparent !important;
  
  .ant-menu-sub.ant-menu-inline {
    background-color: transparent !important;
  }
  
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent !important;
  }
`