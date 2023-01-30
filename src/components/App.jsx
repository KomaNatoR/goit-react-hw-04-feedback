import { useState } from "react";

import Section from "./Caffe/Section";
import FeedbackOptions from "./Caffe/FeedbackOptions";
import Statistics from "./Caffe/Statistics";
import Notification from "./Caffe/Notification";
import { DivMain } from "./Caffe/caffe.styled";

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;
  const totalVoice = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((state.good / totalVoice) * 100);

  const hendleClick = (vote) => {
    setState(prevState=>({...prevState,[vote]:prevState[vote]+1}))
  };

  return (
    <DivMain>
      <Section title={'Please leave your feedback'}>
        <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={hendleClick} />
      </Section>

      <Section title={'Statistics'}>
        {totalVoice === 0
          ? <Notification message="There is no feedback" />
          : <Statistics state={state} total={totalVoice} positivePercentage={countPositiveFeedbackPercentage} />}
      </Section>
    </DivMain>
  );
};
