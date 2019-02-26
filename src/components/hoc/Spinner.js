import React from "react";

import "./spinner.css";

export default function Spinner() {
  return (
    <div className="wrapper">
      <div class="lds-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
