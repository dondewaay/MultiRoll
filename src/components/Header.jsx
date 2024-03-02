import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ghlogo from "/img/ghlogo.png";

export default function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <nav>
      <Link className="link" to="/MultiRoll/" style={linkStyle}>
        <motion.h1
          className="menu"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          whileHover={{
            scale: 1.07,
            color: "#e43737",
          }}
        >
          &nbsp;MultiRoll Beta&nbsp;
        </motion.h1>
      </Link>
      <a href="https://github.com/dondewaay/MultiRoll">
        <motion.img
          className="menu"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            delay: 0,
            scale: 1.25,
          }}
          src={ghlogo}
          alt="GitHub Logo"
        />
      </a>
    </nav>
  );
}
