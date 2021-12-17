import styled from 'styled-components';
import {Button} from "antd";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: ${({width}) => width};
  height: ${({height}) => height};
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({width}) => width};
  height: ${({height}) => height};
`

export const PageWrapper = styled(Row)`
  width: 100vw;
  min-height: 100vh;
  height: auto;
`

export const Half = styled(Column)`
  width: 50%;
  height: 100vh;
`

export const PrimaryBtn = styled(Button)`
  color: white;
  font-weight: bold;
`

export const Paper = styled(Column)`
  background-color: white;
  padding: 3rem;
  margin: 0 3rem;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

export const TitleRow = styled(Column)`
  padding: 1rem;
  border-bottom: solid 1px gray;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
`