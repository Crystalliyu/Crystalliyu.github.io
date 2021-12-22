import styled from 'styled-components';
import {Button} from "antd";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: ${({width}) => width};
  height: ${({height}) => height};
  align-items: ${({vp}) => vp ? vp : null};
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

export const PageBody = styled(Column)`
  width: 100vw;
  min-height: 100vh;
  height: auto;
`

export const Body = styled(Column)`
  width: 100%;
  padding: 2% 10%;
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
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-shadow: 0 2.26066px 9.04265px rgba(209, 216, 226, 0.35);
  border-radius: 4.52133px;
`