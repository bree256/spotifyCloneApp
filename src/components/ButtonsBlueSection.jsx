// import ButtonsBlueSection from "../components/ButtonsBlueSection";
import "../components/BlueSection.css";
export function ButtonsBlueSection({ backgroundColor, text, border }) {
  return (
    <button style={{ backgroundColor: backgroundColor, border: border }}>
      {text}
    </button>
  );
}
