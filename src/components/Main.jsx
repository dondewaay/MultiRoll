import Model from "./Model";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <div className="canvas">
      <motion.div
        className="threed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Canvas>
          <directionalLight position={[2, 2, 2]} />
          <Model position={[0, 0, 0]} size={2.5} detail={0} color={"grey"} />
        </Canvas>
      </motion.div>
      <motion.div
        className="billboard"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <h1>
          A Better Way <br />
          to <span>Roll</span>
        </h1>
        <Link to="/PolyRoll/roll">
          <button className="btn-home">Start</button>
        </Link>
      </motion.div>
      <div className="hide">
        <motion.div
          className="bg-text"
          animate={{ opacity: 1, x: "100%" }}
          transition={{ duration: 1000, repeat: Infinity, ease: "linear" }}
          while={{ x: 0 }}
        >
          PolyRoll<span>PolyRoll</span>PolyRoll<span>PolyRoll</span>PolyRoll
          <span>PolyRoll</span>PolyRoll<span>PolyRoll</span>PolyRoll
          <span>PolyRoll</span>PolyRoll<span>PolyRoll</span>PolyRoll
          <span>PolyR</span>
        </motion.div>
      </div>
    </div>
  );
}
