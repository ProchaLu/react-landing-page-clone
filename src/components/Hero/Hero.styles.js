/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const heroWrapper = css`
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 1.2;
  margin-top: 90px;
`;

export const heroContent = css`
  max-width: 930px;
  margin: 0 auto;
`;

export const heroLogo = css`
  margin: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const headline = css`
  font-size: 48px;
  color: #2e3062;
  margin-bottom: 0.5rem;
`;

export const heroParagraph = css`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #212529;
`;

export const heroButtonOrange = css`
  background-image: linear-gradient(110deg, #fa410f, #f4703d);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 40%);
  position: relative;
  text-transform: uppercase;
  border-radius: 2px;
  color: white;
  padding: 15px 36px 15px 36px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  border: none;
  transition: ease 0.15s;

  &:hover {
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 40%);
  }
`;

export const heroButtonWhite = css`
  position: relative;
  text-transform: uppercase;
  border-radius: 2px;
  color: #fc7028;
  background-color: transparent;
  padding: 15px 36px 15px 36px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #fc7028;
  transition: ease 0.15s;

  &:hover {
    color: white;
    background-color: #fc7028;
  }
`;

export const heroNote = css`
  font-weight: 100;
  color: #5b86e5;
  font-size: 16px;
  margin-top: 10px;
`;
