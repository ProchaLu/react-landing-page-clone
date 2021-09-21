/** @jsxImportSource @emotion/react */
import logoHero from '../../images/hero.svg';
import {
  headline,
  heroButtonOrange,
  heroButtonWhite,
  heroContent,
  heroLogo,
  heroNote,
  heroParagraph,
  heroWrapper,
} from './Hero.styles';

const Hero = () => {
  return (
    <div css={heroWrapper}>
      <div css={heroContent}>
        <img css={heroLogo} src={logoHero} alt="Hero Logo" />
        <h1 css={headline}>
          All the virtual games you need, on one simple platform.
        </h1>
        <p css={heroParagraph}>
          We’ve created the ultimate selection of games and activities, so you
          can spend less time searching and more time engaged with your friends,
          co-workers, or family.
        </p>
        <button css={heroButtonOrange}>Host a Game</button>
        <button css={heroButtonWhite}>Join a Game</button>
        <p css={heroNote}>It's FREE and works with any video conference tool</p>
      </div>
    </div>
  );
};

export default Hero;
