import React from "react";
import "./style.css";

function Header() {
  return (
    <div className='container-header'>
      <h1 className="header">Employee Directory</h1>
      <p className='header-content'>Click on red arrow to filter by heading or use the search box to narrow your results.</p>
    </div>
  );
}

export default Header;