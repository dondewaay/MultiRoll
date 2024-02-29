import { motion } from "framer-motion";

const NewCharacter = ({ set }) => {
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
          <input type="text" />
        </h3>
        <h3>
          Class:&nbsp;
          <input type="text" />
        </h3>
        <h3>
          Color:&nbsp;
          <select name="color" id="color">
            <option value="#374be4">Blue</option>
            <option value="#e43737">Red</option>
          </select>
        </h3>
        <button className="btn">Add</button>
      </div>
    </motion.div>
  );
};

export default NewCharacter;
