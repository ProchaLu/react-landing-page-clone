/** @jsxImportSource @emotion/react */

import game1 from '../../images/game 1.png';
import game10 from '../../images/game 10.png';
import game2 from '../../images/game 2.png';
import game3 from '../../images/game 3.png';
import game4 from '../../images/game 4.png';
import game5 from '../../images/game 5.png';
import game6 from '../../images/game 6.png';
import game7 from '../../images/game 7.png';
import game8 from '../../images/game 8.png';
import game9 from '../../images/game 9.png';
import {
  gameButtonOrange,
  gameButtonWhite,
  gameContainer,
  gameviewContent,
  gameviewPictures,
  gameviewUl,
  gameviewWrapper,
  gameWrapper,
} from './Gameviewsite.style';

const GameviewSite = () => {
  return (
    <div css={gameWrapper}>
      <div css={gameContainer}>
        <div css={gameviewWrapper}>
          <div css={gameviewContent}>
            <h3>A game for every occasion</h3>
            <p>
              Take the work out of finding games to play. Our massive catalog of
              games is the only resource you need to build engagement and morale
              in your remote team.
            </p>
            <button css={gameButtonWhite}>view all games</button>
            <button css={gameButtonOrange}>try for free</button>
          </div>
          <div css={gameviewPictures}>
            <ul css={gameviewUl}>
              <li>
                <img src={game1} alt="game 1" />
                <img src={game2} alt="game 2" />
                <img src={game3} alt="game 3" />
                <img src={game4} alt="game 4" />
                <img src={game5} alt="game 5" />
                <img src={game6} alt="game 6" />
                <img src={game7} alt="game 7" />
                <img src={game8} alt="game 8" />
                <img src={game9} alt="game 9" />
                <img src={game10} alt="game 10" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameviewSite;
