import React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Typography } from "@mui/material";

function RangeSliderComponent() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Typography variant="h1">Range Sliders Demo</Typography>
      <div className="custom-box">
        <div className="row">
          <div className="col">
            <Typography variant="p">Range slider with icons</Typography>
            <Stack
              spacing={2}
              direction="row"
              sx={{ alignItems: "center", mb: 1 }}
            >
              <VolumeDown />
              <Slider
                aria-label="Volume"
                value={value}
                onChange={handleChange}
              />
              <VolumeUp />
            </Stack>
            <Typography variant="p">Disabled basic slider</Typography>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
          </div>
          <div className="col">
            <Typography variant="p">Slider with tooltip</Typography>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <Slider
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="on"
              // color="pallete.secondary.main"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default RangeSliderComponent;
