import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const NewPreset = ({
  render,
  config,
  name,
  handleName,
  handleConfig,
  newPreset,
}) => {
  return (
    <AnimatePresence>
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
            <button className="del" onClick={render}>
              X
            </button>
            <input
              className="name"
              type="text"
              placeholder=" Preset Name"
              value={name}
              onChange={handleName}
            />
            <div className="row">
              <div className="entry">
                <h3 htmlFor="d2">d2: </h3>
                <input
                  type="number"
                  min="0"
                  id="d2"
                  name="d2"
                  value={config.d2}
                  onChange={handleConfig}
                />
              </div>
              <div className="entry">
                <h3 htmlFor="d3">d3: </h3>
                <input
                  type="number"
                  min="0"
                  id="d3"
                  name="d3"
                  value={config.d3}
                  onChange={handleConfig}
                />
              </div>
            </div>
            <div className="row">
              <div className="entry">
                <h3 htmlFor="d4">d4: </h3>
                <input
                  type="number"
                  min="0"
                  id="d4"
                  name="d4"
                  value={config.d4}
                  onChange={handleConfig}
                />
              </div>
              <div className="entry">
                <h3 htmlFor="d6">d6: </h3>
                <input
                  type="number"
                  min="0"
                  id="d6"
                  name="d6"
                  value={config.d6}
                  onChange={handleConfig}
                />
              </div>
            </div>
            <div className="row">
              <div className="entry">
                <h3 htmlFor="d8">d8: </h3>
                <input
                  type="number"
                  min="0"
                  id="d8"
                  name="d8"
                  value={config.d8}
                  onChange={handleConfig}
                />
              </div>
              <div className="entry">
                <h3 htmlFor="d10">d10: </h3>
                <input
                  type="number"
                  min="0"
                  id="d10"
                  name="d10"
                  value={config.d10}
                  onChange={handleConfig}
                />
              </div>
            </div>
            <div className="row">
              <div className="entry">
                <h3 htmlFor="d12">d12: </h3>
                <input
                  type="number"
                  min="0"
                  id="d12"
                  name="d12"
                  value={config.d12}
                  onChange={handleConfig}
                />
              </div>
              <div className="entry">
                <h3 htmlFor="d20">d20: </h3>
                <input
                  type="number"
                  min="0"
                  id="d20"
                  name="d20"
                  value={config.d20}
                  onChange={handleConfig}
                />
              </div>
            </div>
            <div className="row">
              <div className="entry">
                <h3 htmlFor="d100">d100: </h3>
                <input
                  type="number"
                  min="0"
                  id="d100"
                  name="d100"
                  value={config.d100}
                  onChange={handleConfig}
                />
              </div>
              <div className="entry">
                <h3 htmlFor="mod">Mod: </h3>
                <input
                  type="number"
                  min="0"
                  id="mod"
                  name="mod"
                  value={config.mod}
                  onChange={handleConfig}
                />
              </div>
            </div>
          </div>
          <button onClick={newPreset} className="btn">
            Add
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewPreset;
