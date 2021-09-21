/** @jsxImportSource @emotion/react */

import main1 from '../../images/main 1.png';
import main2 from '../../images/main 2.png';
import { mainWrapper, singleMainContent } from './Main.style';

const Main = () => {
  return (
    <div css={mainWrapper}>
      <div css={singleMainContent}>
        <div>
          <img src={main1} alt="main1" />
        </div>
        <div>
          <h3>Build strong organizational culture</h3>
          <p>
            Don’t let remote work limit your interaction with your team. Our
            conversation starter games create the perfect environment for
            sharing and communication.
          </p>
        </div>
      </div>
      <div css={singleMainContent}>
        <div>
          <h3>Boost energy and creativity</h3>
          <p>
            Kickstart your Zoom with a quick, fast-paced game. Have productive
            meetings with your remote team fully engaged and ready to
            collaborate.
          </p>
        </div>
        <div>
          <img src={main2} alt="main2" />
        </div>
      </div>
    </div>
  );
};

export default Main;
