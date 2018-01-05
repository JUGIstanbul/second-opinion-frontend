import styled from 'styled-components';

export default styled.div`
  margin-top: 1em;
  margin-bottom: 2em;
  text-align: left;
  font-size: 12px;
  color: ${props => props.theme[`${props.status}Color`]};
  line-height: 1.6;
`;
