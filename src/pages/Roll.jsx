import RollHero from "../components/RollHero";
import DiceRoller from "../components/DiceRoller";

import "../styles/Roll.scss";

export default function Roll() {
  return (
    <div className="mainDiv">
      <RollHero />
      <DiceRoller />
    </div>
  );
}
