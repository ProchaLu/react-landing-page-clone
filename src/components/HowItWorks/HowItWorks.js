/** @jsxImportSource @emotion/react */

import work1 from '../../images/work 1.png';
import work2 from '../../images/work 2.png';
import work3 from '../../images/work 3.png';
import work4 from '../../images/work 4.png';
import {
  howItWorksHeader,
  howItWorksWrapper,
  singleSteps,
  singleStepsContent,
  workSteps,
} from './HowItWorks.style';

const HowItWorks = () => {
  return (
    <div css={howItWorksWrapper}>
      <div css={howItWorksHeader}>
        <h2>HOW BRIGHTFUL WORKS</h2>
        <p>
          Don’t let remote work limit your interaction with your team. Our
          conversation starter games create the perfect environment for sharing
          and communication.
        </p>
      </div>
      <div css={workSteps}>
        <div css={singleSteps}>
          <div css={singleStepsContent}>
            <h3>
              <a href="/">Sign up for your free account</a>
            </h3>
            <p>Brightful is free to try. Sign up and get playing in seconds.</p>
          </div>
          <img src={work1} alt="work1" />
        </div>
        <div css={singleSteps}>
          <div css={singleStepsContent}>
            <h3>
              <a href="/">Choose the right game for the situation</a>
            </h3>
            <p>Browse our ever growing library of games.</p>
          </div>
          <img src={work2} alt="work2" />
        </div>
        <div css={singleSteps}>
          <div css={singleStepsContent}>
            <h3>
              <a href="/">Create a gameroom and send the link to your team</a>
            </h3>
            <p>
              Brightful works on any browser, on any device. No downloads
              necessary, and your team can play without needing to sign up.
            </p>
          </div>
          <img src={work3} alt="work3" />
        </div>
        <div css={singleSteps}>
          <div css={singleStepsContent}>
            <h3>
              <a href="/">Play while using any video call app</a>
            </h3>
            <p>
              Brightful is best enjoyed while using video conferencing software
              like Zoom or Skype
            </p>
          </div>
          <img src={work4} alt="work4" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
