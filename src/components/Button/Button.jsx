import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
