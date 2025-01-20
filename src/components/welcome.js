import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <div className="content-wrap">
        <h1>Basic React Components</h1>
        <ul className="nav-listing">
          <li>
            <Link to="/autocomplete" title="Autocomplete">Autocomplete</Link>
          </li>
          <li>
            <Link to="/range-slider" title="Range Slider">Range Slider</Link>
          </li>
          <li>
            <Link to="/snackbar" title="Snackbar">Snackbar</Link>
          </li>
          <li>
            <Link to="/select" title="Select">Select</Link>
          </li>
          <li>
            <Link to="/datepicker" title="Datepicker">Datepicker</Link>
          </li>
          <li>
            <Link to="/file-upload" title="File Upload">File Upload</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Welcome;
