/** @jsxImportSource @emotion/react */

import heap from '../../images/heap.svg';
import logoWhite from '../../images/logo-white.svg';
import {
  footerDownContent,
  footerDownRow,
  footerMidContent,
  footerMidRow,
  footerNavItems,
  footerRow,
  footerUpContent,
  footerUpRow,
  footerWrapper,
} from './Footer.style';

const Footer = () => {
  return (
    <div css={footerWrapper}>
      <div css={footerUpContent}>
        <div css={footerUpRow}>
          <div css={footerRow}>
            <img src={logoWhite} alt="logo white" />
            <span>
              Email us:
              <a href="mailto:support@brightful.me">support@brightful.me</a>
            </span>
          </div>
          <div css={footerRow}>
            <div css={footerNavItems}>
              <h5>USE CASES</h5>
              <ul>
                <li>
                  <a href="/team-culture/">Team Culture</a>
                  <a href="/education/">Education</a>
                  <a href="/online-events/">Online Events</a>
                </li>
              </ul>
            </div>
          </div>
          <div css={footerRow}>
            <div css={footerNavItems}>
              <h5>TEAM BUILDING</h5>
              <ul>
                <li>
                  <a href="/blog/best-icebreaker-games-for-team-building-activities/">
                    Icebreaker Games
                  </a>
                  <a href="/blog/all-you-ever-need-to-know-about-remote-work/">
                    Remote Work Tips
                  </a>
                  <a href="/blog/why-is-self-care-in-important-in-the-remote-workplace/">
                    Self-care
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div css={footerRow}>
            <div css={footerNavItems}>
              <h5>COMPANY</h5>
              <ul>
                <li>
                  <a href="/games/">Games</a>
                  <a href="/blog/our-mission/">Our Mission</a>
                  <a href="/pricing/">Pricing</a>
                  <a href="https://twitter.com/brightfulhq">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div css={footerRow}>
            <div css={footerNavItems}>
              <h5>POLICY</h5>
              <ul>
                <li>
                  <a href="/privacy-policy/">Privacy Policy</a>
                  <a href="/user-agreement/">User Agreement</a>
                  <a href="/paid-services-agreement/">
                    Paid Services Agreement
                  </a>
                  <a href="/community-guidelines/">Community Guidelines</a>
                  <a href="/cookie-notice/">Cookie Notice</a>
                  <a href="/security-policy/">Security Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div css={footerMidContent}>
        <div css={footerMidRow}>
          <div css={footerRow}>
            <div css={footerNavItems} />
          </div>
          <div css={footerRow}>
            <div css={footerNavItems}>
              <h5>POPULAR GAMES</h5>
              <ul>
                <li>
                  <a href="/blog/what-are-the-best-online-trivia-games-for-zoom/">
                    Trivia
                  </a>
                  <a href="/blog/hardest-would-you-rather-questions/">
                    Would You Rather
                  </a>
                  <a href="/blog/how-to-play-pictionary/">Pictionary</a>
                  <a href="/blog/werewolf-teambuilding/">Werewolf</a>
                  <a href="/blog/how-to-play-charades/">Charades</a>
                </li>
              </ul>
            </div>
          </div>
          <div css={footerRow}>
            <div css={footerNavItems}>
              <h5>TOP SEARCHES</h5>
              <ul>
                <li>
                  <a href="/blog/best-online-pictionary-games-to-play-with-remote-workers/">
                    Online Pictionary
                  </a>
                  <a href="/blog/funny-would-you-rather-questions/">
                    Would You Rather Questions Funny
                  </a>
                  <a href="/blog/hardest-would-you-rather-questions/">
                    Would You Rather Questions
                  </a>
                  <a href="/blog/general-trivia-questions/">Trivia Questions</a>
                  <a href="/blog/geography-trivia-questions/">
                    Geography Trivia
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div css={footerRow}>
            <div css={footerNavItems}>
              <h5>OUR BEST CONTENT</h5>
              <ul>
                <li>
                  <a href="/blog/best-would-you-rather-questions/">
                    Best Would You Rather Questions
                  </a>
                  <a href="/blog/best-free-online-escape-rooms/">
                    Best Free Online Escape Rooms
                  </a>
                  <a href="/blog/what-are-the-free-alternatives-to-kahoot/">
                    Best Free Alternatives to Kahoot
                  </a>
                  <a href="/blog/random-pictionary-word-generator/">
                    Random Pictionary Word Generator
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div css={footerDownContent}>
        <div css={footerDownRow}>
          <div>
            © 2021 Brightful Innovations Company Limited. All Rights Reserved
            <br />
            BRIGHTFUL™ is a trademark of Brightful Innovations Company Limited
          </div>
          <img src={heap} alt="heap logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
