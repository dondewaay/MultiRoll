import React, { useState, useEffect } from "react";
import Card from "./Card";
import CharacterSelect from "./CharacterSelect";
import { motion, AnimatePresence } from "framer-motion";

const DiceRoller = () => {
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
  });
  const [lastUsedId, setLastUsedId] = useState(() => {
    const storedLastUsedId = localStorage.getItem("lastUsedId");
    return storedLastUsedId ? parseInt(storedLastUsedId) : 0;
  });

  const [isNewCardClicked, setIsNewCardClicked] = useState(false);

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
    });
    setLastUsedId(newId);
  };

  const handleNewCardClick = () => {
    console.log("NewCard clicked");
    setIsNewCardClicked(!isNewCardClicked);
  };

  const CharacterName = "Character Select";

  return (
    <div className="roller">
      <div className="top">
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
        <AnimatePresence>
          {isNewCardClicked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="blur"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="new"
              >
                <h1>Add a Preset:</h1>
                <div className="input-box">
                  <button className="del" onClick={handleNewCardClick}>
                    X
                  </button>
                  <input
                    className="name"
                    type="text"
                    placeholder=" Preset Name"
                    value={presetName}
                    onChange={handlePresetNameChange}
                  />
                  <div className="entry">
                    <label htmlFor="d2">d2: </label>
                    <input
                      type="number"
                      id="d2"
                      name="d2"
                      value={presetConfig.d2}
                      onChange={handlePresetConfigChange}
                    />
                  </div>
                  <div className="entry">
                    <label htmlFor="d3">d3: </label>
                    <input
                      type="number"
                      id="d3"
                      name="d3"
                      value={presetConfig.d3}
                      onChange={handlePresetConfigChange}
                    />
                  </div>
                  <div className="entry">
                    <label htmlFor="d4">d4: </label>
                    <input
                      type="number"
                      id="d4"
                      name="d4"
                      value={presetConfig.d4}
                      onChange={handlePresetConfigChange}
                    />
                  </div>
                  <div className="entry">
                    <label htmlFor="d6">d6: </label>
                    <input
                      type="number"
                      id="d6"
                      name="d6"
                      value={presetConfig.d6}
                      onChange={handlePresetConfigChange}
                    />
                  </div>
                  <div className="entry">
                    <label htmlFor="d8">d8: </label>
                    <input
                      type="number"
                      id="d8"
                      name="d8"
                      value={presetConfig.d8}
                      onChange={handlePresetConfigChange}
                    />
                  </div>
                  <div className="entry">
                    <label htmlFor="d10">d10: </label>
                    <input
                      type="number"
                      id="d10"
                      name="d10"
                      value={presetConfig.d10}
                      onChange={handlePresetConfigChange}
                    />
                  </div>
                  <div className="entry">
                    <label htmlFor="d12">d12: </label>
                    <input
                      type="number"
                      id="d12"
                      name="d12"
                      value={presetConfig.d12}
                      onChange={handlePresetConfigChange}
                    />
                  </div>
                  <div className="entry">
                    <label htmlFor="d20">d20: </label>
                    <input
                      type="number"
                      id="d20"
                      name="d20"
                      value={presetConfig.d20}
                      onChange={handlePresetConfigChange}
                    />
                  </div>
                  <div className="entry">
                    <label htmlFor="d100">d100: </label>
                    <input
                      type="number"
                      id="d100"
                      name="d100"
                      value={presetConfig.d100}
                      onChange={handlePresetConfigChange}
                    />
                  </div>
                  <div className="entry">
                    <label htmlFor="mod">Modifier: </label>
                    <input
                      type="number"
                      id="mod"
                      name="mod"
                      value={presetConfig.mod}
                      onChange={handlePresetConfigChange}
                    />
                  </div>
                </div>
                <button onClick={addPreset} className="btn">
                  Add
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        <div className="grid">
          {presets.map((preset) => (
            <Card
              key={preset.id}
              id={preset.id}
              name={preset.name}
              config={preset.config}
              onDelete={deletePreset}
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
      </AnimatePresence>
    </div>
  );
};

export default DiceRoller;
