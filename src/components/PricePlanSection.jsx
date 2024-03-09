import Lipi from "../assets/icons/lipi (1).svg";
import Paytm from "../assets/icons/paytm(2).svg";
import Visa from "../assets/icons/visa.svg";
import MasterCard from "../assets/icons/mastercard.svg";
import Amex from "../assets/icons/amex.svg";
import DinersClub from "../assets/icons/dinersclub.svg";
import "./PricePlanSection.css";
import PricePlanCards from "./PricePlanCards";
import PriceTerms from "./PriceTerms";

function PricePlanSection() {
  return (
    <div className="priceplan">
      <h1 className="pick">Pick your Premium</h1>
      <p>Listen without limits on your phone, speaker, and other devices.</p>
      <div>
        <img src={Lipi} />
        <img src={Paytm} />
        <img src={Visa} />
        <img src={MasterCard} />
        <img src={Amex} />
        <img src={DinersClub} />
      </div>
      <div>
        <PricePlanCards />
        <PriceTerms />
      </div>
    </div>
  );
}
export default PricePlanSection;
