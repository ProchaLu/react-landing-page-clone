/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const howItWorksWrapper = css`
  margin: 100px;
`;

export const howItWorksHeader = css`
  max-width: 835px;
  text-align: center;
  padding-bottom: 50px;

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: #2e3062;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  p {
    font-size: 20px;
    color: #212529;
    margin-bottom: 20px;
    line-height: 1.5;
    font-weight: 300;
  }
`;

export const workSteps = css`
  grid-gap: 60px;
  margin-top: 80px;
  display: grid;
  justify-content: space-between;
  grid-gap: 0px;
  grid-template-columns: 1fr;
  max-width: 760px;
  margin: 0 auto;
  counter-reset: number;
`;

export const singleSteps = css`
  height: 100%;
  padding: 35px 0px;
  margin-top: 40px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h3 {
    font-size: 30px;
    color: #2e3062;
    margin-bottom: 10px;
    display: block;
  }

  a {
    text-decoration: none;
    color: #2e3062;
    transition: 0.2s ease-in;
    &:hover {
      text-decoration: underline;
      color: #fc7028;
    }
  }

  p {
    font-size: 20px;
    color: #212529;
    margin-bottom: 0px;
    font-weight: 300;
    line-height: 1.5;
  }
`;

export const singleStepsContent = css`
  flex: 1;
  padding-left: 150px;
  padding-right: 35px;
  position: relative;

  &::after {
    position: absolute;
    counter-increment: number;
    content: '0' counter(number);
    top: 0;
    left: 0;
    font-size: 90px;
    color: #212529;
    opacity: 0.1;
    font-weight: 700;
  }

  &:last-child {
  }
`;
