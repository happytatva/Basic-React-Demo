import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import theme from "../theme/theme";
import Box from "@mui/material/Box";
function Welcome() {
  return (
    <>
      <Box
      // To use breakpoints from theme
      // sx={{
      //   backgroundColor: "primary.main",
      //   [theme.breakpoints.down("tablet")]: {
      //     backgroundColor: "secondary.main",
      //   },
      // }}
      >
        <div className="content-wrap">
          <Typography variant="h1">Basic React Components</Typography>
          <ul className="nav-listing">
            <li>
              <Link to="/autocomplete" title="Autocomplete">
                Autocomplete
              </Link>
            </li>
            <li>
              <Link to="/range-slider" title="Range Slider">
                Range Slider
              </Link>
            </li>
            <li>
              <Link to="/snackbar" title="Snackbar">
                Snackbar
              </Link>
            </li>
            <li>
              <Link to="/select" title="Select">
                Select
              </Link>
            </li>
            <li>
              <Link to="/datepicker" title="Datepicker">
                Datepicker
              </Link>
            </li>
            <li>
              <Link to="/file-upload" title="File Upload">
                File Upload
              </Link>
            </li>
          </ul>
        </div>
      </Box>
    </>
  );
}

export default Welcome;
