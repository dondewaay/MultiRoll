import { motion } from "framer-motion";
import { useState } from "react";

const NewCharacter = ({ set, addCharacter }) => {
  const [name, setName] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [color, setColor] = useState("#374be4");

  const handleAddCharacter = () => {
    const newCharacter = {
      name: name,
      characterClass: characterClass,
      color: color,
    };
    addCharacter(newCharacter);
    setName("");
    setCharacterClass("");
    setColor("#374be4");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blur"
    >
      <div className="new-char">
        <button className="del" onClick={set}>
          X
        </button>
        <h2>New Character</h2>
        <h3>
          Name:&nbsp;
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </h3>
        <h3>
          Class:&nbsp;
          <input
            type="text"
            value={characterClass}
            onChange={(e) => setCharacterClass(e.target.value)}
          />
        </h3>
        <h3>
          Color:&nbsp;
          <select
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="#374be4">Blue</option>
            <option value="#e43737">Red</option>
          </select>
        </h3>
        <button className="btn" onClick={handleAddCharacter}>
          Add
        </button>
      </div>
    </motion.div>
  );
};

export default NewCharacter;
