import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <nav>
      <Link className="link" to="/PolyRoll/" style={linkStyle}>
        <motion.h1
          className="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          PolyRoll Beta
        </motion.h1>
      </Link>
      <a href="https://github.com/dondewaay/PolyRoll">
        <motion.img
          src="/img/githublogo.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </a>
    </nav>
  );
}
