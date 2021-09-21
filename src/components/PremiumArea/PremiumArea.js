/** @jsxImportSource @emotion/react */

import { premiumContent, premiumWrapper } from './PremiumArea.style';

const PremiumArea = () => {
  return (
    <div css={premiumWrapper}>
      <div css={premiumContent}>
        <h3>Try Brightful Premium 100% free for 14 days</h3>
        <button>try Brightful</button>
      </div>
    </div>
  );
};

export default PremiumArea;
