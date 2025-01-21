import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SearchSelect from "react-select";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const flavours = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "mango", label: "Mango" },
  { value: "butterscotch", label: "Butterscotch" },
  { value: "kesar-pista", label: "Kesar Pista" },
];

const multiflavours = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "mango", label: "Mango" },
  { value: "butterscotch", label: "Butterscotch" },
  { value: "kesar-pista", label: "Kesar Pista" },
];

function SelectComponent() {
  // for Simple Select
  const [job, setJob] = React.useState("");

  const handleChange = (event) => {
    setJob(event.target.value);
  };

  // for Multiple Select
  const [personName, setPersonName] = React.useState([]);

  const multipleHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // for select Search
  // const [selectedOption, setSelectedOption] = useState(null);

  //for icon select
  const data = [
    {
      value: 1,
      text: "Up Arrow",
      icon: <ArrowUpwardIcon />,
    },
    {
      value: 2,
      text: "Down Arrow",
      icon: <ArrowDownwardIcon />,
    },
    {
      value: 3,
      text: "Left Arrow",
      icon: <ArrowForwardIcon />,
    },
    {
      value: 4,
      text: "Right Arrow",
      icon: <ArrowBackIcon />,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const iconSelectHandleChange = (e) => {
    setSelectedOption(e);
  };

  return (
    <>
      <Typography variant="h1">Select Demo</Typography>
      <div className="custom-box">
        <div className="row">
          <div className="col">
            <Typography variant="p">Single select without search</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Job</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={job}
                label="Select Job"
                onChange={handleChange}
              >
                <MenuItem value="Frontend Developer">
                  Frontend Developer
                </MenuItem>
                <MenuItem value="Backend Developer">Backend Developer</MenuItem>
                <MenuItem value="QA Engineer">QA Engineer</MenuItem>
                <MenuItem value="Business Analyst">Business Analyst</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
                <MenuItem value="Android Developer">Android Developer</MenuItem>
                <MenuItem value="Ios Developer">Ios Developer</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <Typography variant="p">Multiple select without search</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={multipleHandleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.includes(name)} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <Typography variant="p">Single select with search</Typography>
            <SearchSelect
              className="select-search"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={flavours}
              placeholder="You can search here"
            />
          </div>
          <div className="col">
            <Typography variant="p">Multiple Select with search</Typography>
            <SearchSelect
              className="select-search"
              isMulti
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={multiflavours}
              placeholder="You can search here"
            />
          </div>
          <div className="col">
            <Typography variant="p">Icon dropdown</Typography>
            <SearchSelect
              className="select-search"
              placeholder="Select Option"
              value={selectedOption}
              options={data}
              onChange={iconSelectHandleChange}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {e.icon}
                  <span style={{ marginLeft: 5 }}>{e.text}</span>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default SelectComponent;
