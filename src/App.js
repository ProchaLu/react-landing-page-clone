/** @jsxImportSource @emotion/react */
import GameviewSite from './components/Gameviewsite/GameviewSite';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Logolist from './components/Logolist/Logolist';
import Main from './components/Main/Main';
import PlayArea from './components/PlayArea/PlayArea';
import PremiumArea from './components/PremiumArea/PremiumArea';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Logolist />
      <GameviewSite />
      <Main />
      <PlayArea />
      <HowItWorks />
      <PremiumArea />
    </div>
  );
}

export default App;
