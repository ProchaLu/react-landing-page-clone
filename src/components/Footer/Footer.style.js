/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const footerWrapper = css`
  width: 100%;
`;

export const footerUpContent = css`
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background: #2e3062;
`;

export const footerUpRow = css`
  padding: 36px 0px;
  text-align: center;
  color: white;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
`;

export const footerRow = css`
  img {
    height: 48px;
  }

  span {
    display: block;
    color: #bcbcbc;
    font-size: 14px;
    margin-top: 48px;
    position: relative;
    font-weight: 300;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 700;
  }
`;

export const footerNavItems = css`
  h5 {
    text-align: left;
    font-size: 16px;
    margin-bottom: 8px;
  }

  li {
    text-align: left;
    text-decoration: none;
    list-style: none;
  }

  a {
    display: block;
    margin-bottom: 6px;
    padding-left: 0;
    margin-left: 0;
    font-size: 14px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.54);
    padding-bottom: 6px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const footerMidContent = css`
  background: #21234e;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const footerMidRow = css`
  padding: 36px 0px;
  text-align: center;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const footerDownContent = css`
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background: #121334;
  font-size: 14px;
`;

export const footerDownRow = css`
  padding: 16px 0px;
  text-align: center;
  color: white;
  display: grid;
  grid-template-columns: 2fr 1fr;
  color: rgba(255, 255, 255, 0.54);
  font-weight: 300;

  img {
    height: 30px;
  }
`;
