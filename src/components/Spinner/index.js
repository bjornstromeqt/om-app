import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';


export function Spinner({color}) {

    return (
        <Wrapper>
            <Div color={color}/>
            <Div color={color}/>
            <Div color={color}/>
            <Div color={color}/>
        </Wrapper>
    );
}

Spinner.propTypes = {
    color: PropTypes.string
}

Spinner.defaultProps = {
    color: 'grey'
}

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


const Div = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${props => props.color};
  border-radius: 50%;
  animation: ${animate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${props => props.color} transparent transparent transparent;
  &:nth-child(1) {
      animation-delay: -0.45s;
  }
  &:nth-child(2) {
      animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }    
`;

Div.propTypes = {
    color: PropTypes.string,
}
