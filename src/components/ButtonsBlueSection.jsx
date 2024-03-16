// import ButtonsBlueSection from "../components/ButtonsBlueSection";
import "../components/BlueSection.css";
import style from "../components/LoginPage/style.module.css";
export function ButtonsBlueSection({
  backgroundColor,
  text,
  border,
  className,
  margin,
  width,
  img: path,
  svgClass,
}) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        border: border,
        margin: margin,
        width: width,
      }}
      className={className}
    >
      {text}
      <img src={path} className={`${style.loginpagelogos} ${svgClass}`} />
    </button>
  );
}
