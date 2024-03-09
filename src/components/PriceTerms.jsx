import { ButtonsBlueSection } from "./ButtonsBlueSection";
import styles from "./PriceTerms.module.css";
function PriceTerms() {
  return (
    <div className={styles.discount}>
      <h2>Special discount for eligible students in university</h2>
      <ButtonsBlueSection
        className={styles.buttondiscount}
        backgroundColor="white"
        text="LEARN MORE"
        border="2px solid black"
      />
    </div>
  );
}
export default PriceTerms;
