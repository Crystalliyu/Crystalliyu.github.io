import styled from "styled-components";
import {Card, Menu} from "antd";

const { SubMenu } = Menu;

export const StackMenu = styled(Menu)`
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.font};
  transition: none;
  border-color: ${({theme}) => theme.menuBorder};
  box-shadow: none;
  
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${({theme}) => theme.menuSelectedBg};
    transition: none;
  }
  
  .ant-menu-sub.ant-menu-inline .ant-menu-item-group-title {
    color: ${({theme}) => theme.font};
    transition: none;
  }
  
  .ant-menu-sub.ant-menu-inline {
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.font};
    transition: none;
  }
  
  .ant-menu-submenu-arrow {
    color: ${({theme}) => theme.font};
  }
`

export const SubStackMenu = styled(SubMenu)`
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.font};
  transition: none;
`

export const BlogCard = styled(Card)`
  width: 100%;
  cursor: pointer;
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.font};
  
  .ant-card-head {
    border-color: ${({theme}) => theme.menuBorder};;
  }
  
`