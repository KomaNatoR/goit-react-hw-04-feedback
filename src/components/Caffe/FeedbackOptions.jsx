import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        options.map(opt => (<button onClick={()=>onLeaveFeedback(opt)} key={opt} type="button">{opt}</button>))
        
    );
};
FeedbackOptions.defaultProps = {
    options: [],
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;