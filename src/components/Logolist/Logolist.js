/** @jsxImportSource @emotion/react */
import amazon from '../../images/amazon.png';
import dropbox from '../../images/dropbox.png';
import paypal from '../../images/paypal.png';
import pfizer from '../../images/pfizer.png';
import pwc from '../../images/PWC.png';
import target from '../../images/target.png';
import zoom from '../../images/zoom.png';
import {
  logolistContent,
  logolistParagraph,
  logolistPictures,
  logolistPictureWrapper,
  logolistWrapper,
} from './Logolist.style';

const Logolist = () => {
  return (
    <div css={logolistWrapper}>
      <div css={logolistContent}>
        <div css={logolistParagraph}>Trusted by companies worldwide</div>
        <div css={logolistPictureWrapper}>
          <img css={logolistPictures} src={amazon} alt="Amazon" />
          <img css={logolistPictures} src={pfizer} alt="Pfizer" />
          <img css={logolistPictures} src={zoom} alt="Zoom" />
          <img css={logolistPictures} src={pwc} alt="PWC" />
          <img css={logolistPictures} src={dropbox} alt="Dropbox" />
          <img css={logolistPictures} src={paypal} alt="Paypal" />
          <img css={logolistPictures} src={target} alt="Target" />
        </div>
      </div>
    </div>
  );
};

export default Logolist;
