/** @jsxImportSource @emotion/react */

import { playContent, playWrapper } from './PlayArea.style';

const PlayArea = () => {
  return (
    <div css={playWrapper}>
      <div css={playContent}>
        <h3>Ready to take your remote team to another level?</h3>
        <p>Get started in under 30 seconds.</p>
        <button>play for free</button>
      </div>
    </div>
  );
};

export default PlayArea;
