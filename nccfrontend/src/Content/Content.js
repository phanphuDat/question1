import React from "react";
import Card from "../Card/Card";
import logo from "../img/logoNCC 1.png";
import './Content.css';

export default function Content() {
  return (
    <div className="container content">
      <div className="content-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="content-info">
        <p>Lorem ipsum dolor sit asmet?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}
