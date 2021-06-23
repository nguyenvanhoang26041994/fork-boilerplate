import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.col ? 'column' : 'row'};

  > * {
    margin-right: ${props => props.col ? '0' : props.span};
    margin-bottom: ${props => props.col ? props.span : '0'};
  }
`;

Wrapper.defaultProps = {
  span: '0.5rem',
}

export default Wrapper;
