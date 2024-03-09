// import ButtonsBlueSection from "../components/ButtonsBlueSection";
import "../components/BlueSection.css";
export function ButtonsBlueSection({
  backgroundColor,
  text,
  border,
  className,
}) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        border: border,
      }}
      className={className}
    >
      {text}
    </button>
  );
}
