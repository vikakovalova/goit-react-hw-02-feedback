import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  margin-right: 10px;
  min-width: 70px;
  border-radius: 5px;
  font-size: 14px;
  background-color: #fffff8;
  color: #000;

  transition: color 250ms linear, background-color 250ms linear;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #000;
    transition: color 250ms linear, background-color 250ms linear;
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
