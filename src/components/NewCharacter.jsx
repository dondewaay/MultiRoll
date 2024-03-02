import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const STORAGE_KEY = "nextCharacterId";

const getNewId = () => {
  const storedId = localStorage.getItem(STORAGE_KEY);
  return storedId ? parseInt(storedId, 10) : 1;
};

const NewCharacter = ({ set, addCharacter }) => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [color, setColor] = useState("#374be4");
  const [race, setRace] = useState("");
  const [nextId, setNextId] = useState(getNewId());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, nextId);
  }, [nextId]);

  const handleAddCharacter = () => {
    const newCharacterId = nextId;
    setNextId(nextId + 1);

    const newCharacter = {
      id: newCharacterId,
      name: name,
      className: className,
      color: color,
      race: race,
    };
    addCharacter(newCharacter);
    setName("");
    setClassName("");
    setColor("");
    setRace("");
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
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </h3>
        <h3>
          Race:&nbsp;
          <input
            type="text"
            value={race}
            onChange={(e) => setRace(e.target.value)}
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
            <option value="#cde437">Yellow</option>
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
