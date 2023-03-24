import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {

  return (
    <div className="sideBar">
      <ul>
        <li className="language">
          <Link to='/language'>Language</Link>
        </li>
        <li className="genre">
          <Link to='/genre'>Genre</Link>
        </li>
        <li className="author">
          <Link to='/author'>Author</Link>
        </li>
        <li className="publisher">
          <Link to='/publisher'>Publisher</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
