import DiceRoller from "../components/DiceRoller";
import CharacterSelect from "../components/CharacterSelect"
import "../styles/Roll.scss";

export default function Roll() {
  return (
    <div className="mainDiv">
      <DiceRoller />
    </div>
  );
}
