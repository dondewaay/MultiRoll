import Card from "./Card";
import { useState } from "react";

const DiceRoller = () => {
  const [presets, setPresets] = useState([]);
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
  });

  const handlePresetNameChange = (event) => {
    setPresetName(event.target.value);
  };

  const handlePresetConfigChange = (event) => {
    const { name, value } = event.target;
    setPresetConfig({ ...presetConfig, [name]: parseInt(value) });
  };

  const addPreset = () => {
    const newPreset = { name: presetName, config: presetConfig };
    setPresets([...presets, newPreset]);
    setPresetName("");
    setPresetConfig({
      d2: 0,
      d4: 0,
      d6: 0,
      d8: 0,
      d10: 0,
      d12: 0,
      d20: 0,
      d100: 0,
    });
  };

  return (
    <div className="roller">
      <div className="new">
        <h1>Add a Preset:</h1>
        <input
          type="text"
          placeholder="Preset Name"
          value={presetName}
          onChange={handlePresetNameChange}
        />
        <br />
        <label htmlFor="d2">d2: </label>
        <input
          type="number"
          id="d2"
          name="d2"
          value={presetConfig.d2}
          onChange={handlePresetConfigChange}
        />
        <br />
        <label htmlFor="d3">d3: </label>
        <input
          type="number"
          id="d3"
          name="d3"
          value={presetConfig.d3}
          onChange={handlePresetConfigChange}
        />
        <br />
        <label htmlFor="d4">d4: </label>
        <input
          type="number"
          id="d4"
          name="d4"
          value={presetConfig.d4}
          onChange={handlePresetConfigChange}
        />
        <br />
        <label htmlFor="d6">d6: </label>
        <input
          type="number"
          id="d6"
          name="d6"
          value={presetConfig.d6}
          onChange={handlePresetConfigChange}
        />
        <br />
        <label htmlFor="d8">d8: </label>
        <input
          type="number"
          id="d8"
          name="d8"
          value={presetConfig.d8}
          onChange={handlePresetConfigChange}
        />
        <br />
        <label htmlFor="d10">d10: </label>
        <input
          type="number"
          id="d10"
          name="d10"
          value={presetConfig.d10}
          onChange={handlePresetConfigChange}
        />
        <br />
        <label htmlFor="d12">d12: </label>
        <input
          type="number"
          id="d12"
          name="d12"
          value={presetConfig.d12}
          onChange={handlePresetConfigChange}
        />
        <br />
        <label htmlFor="d20">d20: </label>
        <input
          type="number"
          id="d20"
          name="d20"
          value={presetConfig.d20}
          onChange={handlePresetConfigChange}
        />
        <br />
        <label htmlFor="d100">d100: </label>
        <input
          type="number"
          id="d100"
          name="d100"
          value={presetConfig.d100}
          onChange={handlePresetConfigChange}
        />
        <button onClick={addPreset}>Add</button>
      </div>
      <div>
        <div className="preset-container">
          {presets.map((preset, index) => (
            <Card key={index} name={preset.name} config={preset.config} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiceRoller;
