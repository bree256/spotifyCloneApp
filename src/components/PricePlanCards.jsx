import Tick from "../assets/icons/tick.svg";
import "./PricePlanSection.css";
import { ButtonsBlueSection } from "./ButtonsBlueSection";

function PricePlanCards() {
  return (
    <div className="pricecards">
      <div className="pricecard">
        <h4 className="top">One-time plans available</h4>
        <h2 className="title">Mini</h2>
        <p className="top">
          From ₹7/day <br></br>1 account on mobile only
        </p>
        <hr className="hr1" id="onlyhr"></hr>
        <div className="info1">
          <div className="tick">
            <img src={Tick} />
            <p className="description">Ad-free music listening on mobile</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">Group Session</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">Download 30 songs on 1 mobile device</p>
          </div>
          <ButtonsBlueSection
            backgroundColor="black"
            text="VIEW PLANS"
            width="250px"
          />
          <div className="terms2">
            <span> Terms and conditions apply.</span>
          </div>
        </div>
      </div>
      <div className="pricecard">
        <h3 className="duration">1 month free</h3>
        <h4 className="top">One-time plans available</h4>
        <h2 className="title">Individual</h2>
        <p className="top">
          ₹119/month after offer period <br></br>1 account
        </p>
        <hr className="hr1"></hr>
        <div className="info2">
          <div className="tick">
            <img src={Tick} />
            <p className="description">Ad-free music listening</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">Group Session</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">
              Download 10k songs/device on 5 devices
            </p>
          </div>
          <ButtonsBlueSection
            backgroundColor="black"
            text="VIEW PLANS"
            width="250px"
          />
          <div className="terms2">
            <p className="termsandconditions">
              <span> Terms and conditions apply.</span>1 month free not
              available for users who have already tried Premium.
            </p>
          </div>
        </div>
      </div>
      <div className="pricecard">
        <h3 className="duration">1 month free</h3>
        <h4 className="top">One-time plans available</h4>
        <h2 className="title">Duo</h2>
        <p className="top">
          ₹149/month after offer period <br></br>2 accounts
        </p>
        <hr className="hr1"></hr>
        <div className="info3">
          <div className="tick">
            <img src={Tick} />
            <p className="description">For couples who live together</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">Ad-free music listening</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">Group Session</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">
              Download 10k songs/device, on 5 devices per account
            </p>
          </div>
          <ButtonsBlueSection
            backgroundColor="black"
            text="VIEW PLANS"
            width="250px"
          />
          <div className="terms2">
            <p className="termsandconditions">
              <span> Terms and conditions apply.</span>1 month free not
              available for users who have already tried Premium.
            </p>
          </div>
        </div>
      </div>
      <div className="pricecard">
        <h3 className="duration">1 month free</h3>
        <h4 className="top">One-time plans available</h4>
        <h2 className="title">Family</h2>
        <p className="top">
          ₹179/month after offer period <br></br>Up to 6 accounts
        </p>
        <hr className="hr1"></hr>
        <div className="info4">
          <div className="tick">
            <img src={Tick} />
            <p className="description">For family who live together</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">Block explicit music</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">Ad-free music listening</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">Group Session</p>
          </div>
          <div className="tick">
            <img src={Tick} />
            <p className="description">
              Download 10k songs/device on 5 devices
            </p>
          </div>
          <ButtonsBlueSection
            backgroundColor="black"
            text="VIEW PLANS"
            width="250px"
          />
          <div className="terms2">
            <p className="termsandconditions">
              <span> Terms and conditions apply.</span>1 month free not
              available for users who have already tried Premium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PricePlanCards;
