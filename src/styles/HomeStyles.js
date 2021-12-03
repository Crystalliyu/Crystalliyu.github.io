import styled from "styled-components";
import {Half, PrimaryBtn, Row} from "./CommonStyles";
import homeBg from "../assets/homeBg.png";

export const Left = styled(Half)`
  background-color: #222A36;
  flex-wrap: wrap;
  overflow: visible;
  
`

export const Right = styled(Half)`
  background-image: url(${homeBg});
  background-size: cover;
`

export const Header = styled(Row)`
  width: 100%;
  height: 5rem;
  color: white;
  font-size: 20px;
  font-weight: inherit;
  margin: 2rem 0 0 8rem;
`

export const Tab = styled.p`
  margin-right: 2rem;
`

export const LargeText = styled.p`
  color: white;
  font-size: 48px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  margin: 5rem 0 0 8rem;
  z-index: 10;
  white-space: nowrap;
`

export const Description = styled.p`
  font-size: 20px;
  margin: 2rem 0 0 8rem;
  color: gray;
  width: 60%;
`

export const EmailBtn = styled(PrimaryBtn)`
  width: 203px;
  height: 64px;
  margin: 1rem 0 0 8rem;
  font-family: 'Poppins', sans-serif;
`

export const BtnRow = styled(Row)`
  align-items: center;
  color: white;
`