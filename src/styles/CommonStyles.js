import styled from 'styled-components';
import {Button} from "antd";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
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