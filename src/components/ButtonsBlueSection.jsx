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
  onClick: onClick,
  disabled: disabled,
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
      onClick={onClick}
      disabled={disabled}
    >
      <img src={path} className={`${style.loginpagelogos} ${svgClass}`} />
      {text}
    </button>
  );
}
