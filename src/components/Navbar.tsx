import React from "react";
interface Props {}

const Navbar: React.FC<Props> = (props) => {
  return (
    <nav>
      <div className="logo">
        <img src={require("../assets/link.png").default} alt="link" />
        <p>
          <span>Rohi</span>.th
        </p>
      </div>
      <div className="theme-switcher">
        <button>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
