import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  > * {
    margin-right: ${props => props.span};
  }
`;

Wrapper.defaultProps = {
  span: '0.5rem',
}

export default Wrapper;
