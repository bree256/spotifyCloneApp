import "./App.css";
import LandingPageHeader from "./components/LandingPageHeader";
import BlueSection from "./components/BlueSection";
import SubSectionWhite from "./components/SubSectionWhite";
import cards from "./components/Cards";
import PricePlanSection from "./components/PricePlanSection";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
function App() {
  return (
    <>
      <LoginPage />
      <LandingPageHeader />
      <BlueSection />
      <h1>The Power of Premium</h1>
      <div className="herosection">
        <SubSectionWhite
          img={cards[0].img}
          h3={cards[0].h3}
          p={cards[0].p}
          className="subsectionwhite"
        />
        <SubSectionWhite img={cards[1].img} h3={cards[1].h3} p={cards[1].p} />
        <SubSectionWhite img={cards[2].img} h3={cards[2].h3} p={cards[2].p} />
        <SubSectionWhite img={cards[3].img} h3={cards[3].h3} p={cards[3].p} />
      </div>
      <PricePlanSection />
      <Footer />
    </>
  );
}

export default App;
