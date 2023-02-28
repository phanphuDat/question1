import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div>
      <nav className="sideBar">
        <div>
          <p>Home</p>
          <p>Services</p>
          <p>News</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </nav>
    </div>
  );
}
