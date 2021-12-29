import styled from "styled-components";
import {Row} from "./CommonStyles";

export const ProjectRow = styled(Row)`
  flex-wrap: wrap;
  flex-shrink: 0;
  justify-content: space-between;
`

export const ImageBox = styled(Row)`
  width: 80%;
  height: 600px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.imgBg};
  padding: 60px;
  margin-bottom: 20px;
`

export const ProjectImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
`