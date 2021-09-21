/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const mainWrapper = css`
  width: 930px;
  padding-top: 50px;
  margin-bottom: 100px;
`;

export const singleMainContent = css`
  grid-gap: 50px;
  margin-bottom: 50px;
  padding-top: 50px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  align-items: center;

  h3 {
    font-size: 30px;
    color: #2e3062;
    margin-bottom: 15px;
    line-height: 1.2;
  }

  p {
    color: #212529;
    margin-bottom: 0px;
    line-height: 1.6;
    font-weight: 300;
  }
`;
