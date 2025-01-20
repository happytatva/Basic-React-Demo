import React from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DatepickerComponent() {
  return (
    <>
      <h1>Datepicker Demo</h1>
      <div className="custom-box">
        <div className="row">
          <div className="col">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Basic date picker" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </>
  );
}
export default DatepickerComponent;
