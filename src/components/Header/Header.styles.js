/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const navWrapper = css`
  height: 80px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: white;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const imageHeader = css`
  position: relative;
  padding-right: 50px;
  padding-left: 15px;
`;

export const navList = css`
  color: #2e3062;
  text-transform: uppercase;
  margin-right: 30px;
  font-size: 14px;
  list-style: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
`;

export const navLink = css`
  text-decoration: none;
  color: #2e3062;
  transition: ease 0.15s;
  &:hover {
    color: #fc7028;
  }
`;

export const loginButton = css`
  color: #fc7028;
  border: 1px solid #fc7028;
  text-transform: uppercase;
  border-radius: 2px;
  background-color: white;
  padding: 5px;
  cursor: pointer;
  transition: ease 0.15s;
  font-weight: 700;
  &:hover {
    color: white;
    background-color: #fc7028;
  }
`;
