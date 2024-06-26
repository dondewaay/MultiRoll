import Card from "./Card";
import NewPreset from "./NewPreset";
import NewCharacter from "./NewCharacter";
import ScrollingText from "./ScrollingText";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const DiceRoller = () => {
  const [isNewCardClicked, setIsNewCardClicked] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [renderNewChar, setRenderNewChar] = useState(false);
  const [characters, setCharacters] = useState(() => {
    const storedCharacters = localStorage.getItem("characters");
    return storedCharacters ? JSON.parse(storedCharacters) : [];
  });
  const [presets, setPresets] = useState(() => {
    const storedPresets = localStorage.getItem("presets");
    return storedPresets ? JSON.parse(storedPresets) : [];
  });
  const [presetName, setPresetName] = useState("");
  const [presetConfig, setPresetConfig] = useState({
    d2: 0,
    d3: 0,
    d4: 0,
    d6: 0,
    d8: 0,
    d10: 0,
    d12: 0,
    d20: 0,
    d100: 0,
    mod: 0,
    id: 0,
  });

  const [lastUsedId, setLastUsedId] = useState(() => {
    const storedLastUsedId = localStorage.getItem("lastUsedId");
    return storedLastUsedId ? parseInt(storedLastUsedId) : 0;
  });

  const handleRenderNewChar = () => {
    setRenderNewChar(!renderNewChar);
  };

  useEffect(() => {
    localStorage.setItem("presets", JSON.stringify([...presets]));
  }, [presets]);

  useEffect(() => {
    localStorage.setItem("characters", JSON.stringify([...characters]));
  }, [characters]);

  const addCharacter = (newCharacter) => {
    const newId = lastUsedId + 1;
    newCharacter.id = newId;
    setCharacters([...characters, newCharacter]);
    setSelectedCharacter(newCharacter);
    setLastUsedId(newId);
    handleRenderNewChar();
  };

  useEffect(() => {
    localStorage.setItem("lastUsedId", lastUsedId.toString());
  }, [lastUsedId]);

  const handlePresetNameChange = (event) => {
    setPresetName(event.target.value);
  };

  const handlePresetConfigChange = (event) => {
    const { name, value } = event.target;
    setPresetConfig({ ...presetConfig, [name]: parseInt(value) });
  };

  const deletePreset = (id) => {
    setPresets(presets.filter((preset) => preset.id !== id));
  };

  const deleteChar = (id) => {
    setPresets(presets.filter((preset) => preset.char !== id));
    setCharacters(characters.filter((character) => character.id !== id));
    setSelectedCharacter(null);
  };

  const addPreset = () => {
    const newId = lastUsedId + 1;
    const newPreset = {
      id: newId,
      name: presetName,
      config: presetConfig,
      char: selectedCharacter.id,
    };
    setPresets([...presets, newPreset]);
    setPresetName("");
    setPresetConfig({
      d2: 0,
      d3: 0,
      d4: 0,
      d6: 0,
      d8: 0,
      d10: 0,
      d12: 0,
      d20: 0,
      d100: 0,
      mod: 0,
      id: 0,
    });
    setLastUsedId(newId);
  };

  const handleNewCardClick = () => {
    setIsNewCardClicked(!isNewCardClicked);
  };

  const CharacterName = "Character Select";

  return (
    <div className="roller">
      <div className="top">
        {selectedCharacter ? (
          <motion.div className="big-text">{selectedCharacter.name}</motion.div>
        ) : (
          <div className="big-text">
            Create
            {characters && characters.length > 0 && <span> or Select</span>}
            &nbsp;a
            <br />
            Character
          </div>
        )}
        <div className="select-contain">
          <button className="char-btn" onClick={handleRenderNewChar}>
            +
          </button>
          {characters && characters.length > 0 && (
            <select
              className="selectacharacter"
              name="Character Select"
              id="charsel"
              value={selectedCharacter ? selectedCharacter.name : ""}
              onChange={(e) => {
                const selectedCharacterName = e.target.value;
                const selectedCharacter = characters.find(
                  (character) => character.name === selectedCharacterName
                );
                setSelectedCharacter(selectedCharacter);
              }}
            >
              <option value="">Select Character</option>
              {characters.map((character) => (
                <option key={character.id} value={character.name}>
                  {character.name}
                </option>
              ))}
            </select>
          )}
          {characters && characters.length > 0 && (
            <button
              className="char-del"
              onClick={() => deleteChar(selectedCharacter.id)}
            >
              X
            </button>
          )}
        </div>
        {renderNewChar && (
          <NewCharacter set={handleRenderNewChar} addCharacter={addCharacter} />
        )}
        <div className="hide">
          <AnimatePresence mode="wait">
            <ScrollingText
              key={999}
              content={
                selectedCharacter && selectedCharacter.className
                  ? selectedCharacter.className.replace(/\s+/g, "")
                  : "CharacterSelect"
              }
              colorSel={
                selectedCharacter && selectedCharacter.color
                  ? selectedCharacter.color
                  : "#374be4"
              }
            />
          </AnimatePresence>
        </div>
        {isNewCardClicked && (
          <NewPreset
            render={handleNewCardClick}
            config={presetConfig}
            name={presetName}
            handleName={handlePresetNameChange}
            handleConfig={handlePresetConfigChange}
            newPreset={addPreset}
          />
        )}
      </div>
      {selectedCharacter ? (
        <motion.div className="grid" layout>
          {presets
            .filter((preset) => preset.char === selectedCharacter.id)
            .map((preset) => (
              <Card
                key={preset.id}
                id={preset.id}
                name={preset.name}
                config={preset.config}
                onDelete={deletePreset}
                handleConfig={handlePresetConfigChange}
                newPreset={addPreset}
                isClicked={isNewCardClicked}
                layout
              />
            ))}
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ background: "rgba(255, 255, 255, 0.29)" }}
              whileHover={{ background: "rgba(255, 255, 255, 0.5)" }}
              className="add-new"
              onClick={handleNewCardClick}
              layout
            >
              +
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="extra-div" />
      )}
    </div>
  );
};

export default DiceRoller;
