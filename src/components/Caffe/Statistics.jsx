import PropTypes from 'prop-types';

const Statistics = ({ state, total, positivePercentage }) => {
    const { good, neutral, bad } = state;
    // console.log(state);
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </>
    );
};
Statistics.propTypes = {
    state:PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired, 
    }),
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;