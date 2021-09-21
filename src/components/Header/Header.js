/** @jsxImportSource @emotion/react */

import logo from '../../images/logo-dark.svg';
import {
  imageHeader,
  loginButton,
  navLink,
  navList,
  navWrapper,
} from './Header.styles';

const Header = () => {
  return (
    <div css={navWrapper}>
      <img css={imageHeader} src={logo} alt="Logo" />
      <ul>
        <li css={navList}>
          <a css={navLink} href="/">
            Team Culture
          </a>
        </li>
        <li css={navList}>
          <a css={navLink} href="/">
            Education
          </a>
        </li>
        <li css={navList}>
          <a css={navLink} href="/">
            Online Events
          </a>
        </li>
        <li css={navList}>
          <a css={navLink} href="/">
            Games & Activities
          </a>
        </li>
        <li css={navList}>
          <a css={navLink} href="/">
            How it Works
          </a>
        </li>
        <li css={navList}>
          <button css={loginButton}>LOG IN / SIGN UP</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
