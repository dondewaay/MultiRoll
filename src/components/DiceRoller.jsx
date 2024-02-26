import React, { useState, useEffect } from "react";
import Card from "./Card";
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

  useEffect(() => {
    localStorage.setItem("presets", JSON.stringify(presets));
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

  return (
    <div className="roller">
      <div className="new">
        <h1>Add a Preset:</h1>
        <div className="input-box">
          <input
            className="name"
            type="text"
            placeholder=" Preset Name"
            value={presetName}
            onChange={handlePresetNameChange}
          />
          <div className="row">
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
          </div>
          <div className="row">
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
          </div>
          <div className="row">
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
        </div>
        <button onClick={addPreset} className="btn">
          Add
        </button>
      </div>
      <AnimatePresence>
        <motion.div className="grid" layout>
          {presets.map((preset) => (
            <Card
              key={preset.id}
              id={preset.id}
              name={preset.name}
              config={preset.config}
              onDelete={deletePreset}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DiceRoller;
