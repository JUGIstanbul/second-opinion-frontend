import styled from 'styled-components';
import { pure } from 'recompose';

export const Input = styled.input`
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  width: 100%;
  max-width: 380px;
  height: 2.57em;
  border-radius: 5px;
  padding: 0 0.71em;
  background: ${props =>
    props.error ? props.theme.smoothDangerColor : props.theme.white};
  border: solid 1px
    ${props =>
      props.error ? props.theme.dangerColor : props.theme.grey};
  color: ${props => props.theme.textColor};
  outline: none;
  box-sizing: border-box;
`;

export default pure(Input);
