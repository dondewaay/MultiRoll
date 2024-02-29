import React, { useState, useEffect } from "react";
import Card from "./Card";
import CharacterSelect from "./CharacterSelect";
import NewPreset from "./NewPreset";
import NewCharacter from "./NewCharacter";
import { motion, AnimatePresence } from "framer-motion";
import { render } from "react-dom";

const DiceRoller = () => {
  const [isNewCardClicked, setIsNewCardClicked] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [renderNewChar, setRenderNewChar] = useState(false);
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
    char: selectedCharacter,
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

  const addPreset = () => {
    const newId = lastUsedId + 1;
    const newPreset = {
      id: newId,
      name: presetName,
      config: presetConfig,
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
      character: null,
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
        {renderNewChar ? <NewCharacter set={handleRenderNewChar} /> : null}
        <AnimatePresence>
          <motion.div
            className="hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="bg-text"
              animate={{ x: "-100%" }}
              transition={{ duration: 1000, ease: "linear", repeat: Infinity }}
              while={{ x: 0 }}
            >
              {CharacterName}&nbsp;
              <span>{CharacterName}&nbsp; </span>
              {CharacterName}&nbsp;
              <span>{CharacterName}&nbsp; </span>
              {CharacterName}&nbsp;
              <span>{CharacterName}&nbsp; </span>
              {CharacterName}&nbsp;
              <span>{CharacterName}&nbsp; </span>
              {CharacterName}&nbsp;
              <span>{CharacterName}&nbsp; </span>
              {CharacterName}&nbsp;
              <span>{CharacterName}&nbsp; </span>
              {CharacterName}&nbsp;
              <span>{CharacterName}&nbsp; </span>
              {CharacterName}&nbsp;
            </motion.div>
          </motion.div>
        </AnimatePresence>
        {isNewCardClicked && (
          <NewPreset
            render={handleNewCardClick}
            config={presetConfig}
            name={presetName}
            handleName={handlePresetNameChange}
            newPreset={addPreset}
          />
        )}
      </div>
      {selectedCharacter ? (
        <div className="grid">
          {presets.map((preset) => (
            <Card
              key={preset.id}
              id={preset.id}
              name={preset.name}
              config={preset.config}
              onDelete={deletePreset}
              handleConfig={handlePresetConfigChange}
              newPreset={addPreset}
              isClicked={isNewCardClicked}
            />
          ))}
          <AnimatePresence>
            <motion.div
              initial={{ background: "rgba(255, 255, 255, 0.29)" }}
              whileHover={{ background: "rgba(255, 255, 255, 0.5)" }}
              className="add-new"
              onClick={handleNewCardClick}
            >
              +
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="extra-div" />
      )}
    </div>
  );
};

export default DiceRoller;
