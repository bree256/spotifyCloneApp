import { ButtonsBlueSection } from "./ButtonsBlueSection";
function BlueSection() {
  return (
    <div className="Bluesection">
      <h1>Get Premium free For 1 month</h1>
      <p>
        Just ₹119/month after. Debit and Credit Cards are accepted. Cancel
        anytime.
      </p>
      <div className="Buttons">
        <ButtonsBlueSection backgroundColor="black" text="GET STARTED" />
        <ButtonsBlueSection
          backgroundColor="#1c75de"
          text="SEE OTHER PLANS"
          border="1px solid white"
        />
      </div>
      <p className="terms">
        <span>Terms and Condtions Apply</span>. 1month free not available for
        users who already have premium
      </p>
    </div>
  );
}
export default BlueSection;
