// import cards from "./Cards";
import "../components/SubSectionWhite.css";

function SubSectionWhite(props) {
  return (
    <div className="cards">
      <img src={props.img} alt="icon"></img>
      <h3>{props.h3}</h3>
      <p>{props.p}</p>
    </div>
  );
}
export default SubSectionWhite;
