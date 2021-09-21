/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const playWrapper = css`
  background-image: url(https://www.brightful.me/assets/play/img/v3/play-bg.png?v=38230a6d59);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #2e3062;
`;

export const playContent = css`
  padding: 60px;
  text-align: center;

  h3 {
    font-size: 30px;
    margin-bottom: 10px;
    color: #fff;
  }

  p {
    font-size: 24px;
    color: #fff;
    margin-bottom: 30px;
    font-weight: 300;
  }
  button {
    background-image: linear-gradient(110deg, #fa410f, #f4703d);
    position: relative;
    text-transform: uppercase;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    padding: 8px 8px;
    transition: ease 0.15s;

    &:hover {
      box-shadow: 0 4px 12px 0 rgb(0 0 0 / 40%);
    }
  }
`;
