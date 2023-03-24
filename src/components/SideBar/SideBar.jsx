import React from "react";
import { Link } from "react-router-dom";
import './sideBar.scss';

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
        <li className="slider">
          <Link to='/slider'>Slider</Link>
        </li>
        <li className="book">
          <Link to='/book'>Book</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
