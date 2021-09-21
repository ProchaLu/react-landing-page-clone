/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const logolistWrapper = css`
  padding: 48px 0px 48px 0px;
`;

export const logolistContent = css`
  max-width: 930px;
`;

export const logolistParagraph = css`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: #212529;
  text-align: left;

  &:after {
    content: '';
    width: 700px;
    height: 1px;
    background: rgba(0, 0, 0, 0.08);
    position: absolute;
    bottom: -8px;
  }
`;

export const logolistPictureWrapper = css`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 16px;
  padding-bottom: 24px;
`;

export const logolistPictures = css`
  width: 140px;
`;
