import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {

  return (
    <div className="sideBar">
      <ul>
        <li className="language">
          <Link to='/language'>Language</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
