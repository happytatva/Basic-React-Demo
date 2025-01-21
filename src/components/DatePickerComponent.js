import React from "react";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

function DatepickerComponent() {
  return (
    <>
      <Typography variant="h1">Datepicker Demo</Typography>
      <div className="custom-box">
        <div className="row">
          <div className="col">
            <Typography variant="p">Responsive variant</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DemoItem>
                  <DatePicker defaultValue={dayjs("2022-04-17")} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="col">
            <Typography variant="p">Select only month & year</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label={"MM-YYYY"} views={["month", "year"]} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="col">
            <Typography variant="p">Datepicker with Static variant</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["StaticDatePicker"]}>
                <DemoItem>
                  <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </>
  );
}
export default DatepickerComponent;
