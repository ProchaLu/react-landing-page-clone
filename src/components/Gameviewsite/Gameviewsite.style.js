/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const gameWrapper = css`
  background-color: #fafafa;
  overflow: hidden;
`;

export const gameContainer = css`
  max-width: 930px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const gameviewWrapper = css`
  padding: 35px 0px 35px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const gameviewContent = css`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  width: 400px;
  h3 {
    color: #2e3062;
    margin-bottom: 20px;
    font-size: 1.75rem;
  }

  p {
    font-size: 17px;
    margin-bottom: 20px;
    text-align: left;
    font-weight: 300;
  }
`;

export const gameButtonWhite = css`
  background: transparent;
  color: #fc7028;
  border: 1px solid #fc7028;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 5px 8px 5px;
  font-weight: 700;
  font-size: 14px;
  margin-right: 10px;
  transition: ease 0.15s;

  &:hover {
    color: white;
    background-color: #fc7028;
  }
`;

export const gameButtonOrange = css`
  background-image: linear-gradient(110deg, #fa410f, #f4703d);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 40%);
  color: white;
  border: 1px solid #fc7028;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 5px 8px 5px;
  font-weight: 700;
  font-size: 14px;
  transition: ease 0.15s;

  &:hover {
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 40%);
  }
`;

export const gameviewPictures = css`
  max-width: 530px;
`;

export const gameviewUl = css`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 16px;

  img {
    width: 110px;
    vertical-align: middle;
    border-style: none;
    overflow: hidden;
    margin: 10px 10px;
  }
`;
