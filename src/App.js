import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome";
import AutoCompleteComponent from "./components/AutoCompleteComponent";
import SnackBarComponent from "./components/SnackBarComponent";
import RangeSliderComponent from "./components/RangeSliderComponent";
import SelectComponent from "./components/SelectComponent";
import FileUploadComponent from "./components/FileUploadComponent";
import DatepickerComponent from "./components/DatePickerComponent";

function App() {
  return (
    <div className="App">
      <section>
        <div className="container">
          <Router>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/autocomplete" element={<AutoCompleteComponent />} />
              <Route path="/snackbar" element={<SnackBarComponent />} />
              <Route path="/range-slider" element={<RangeSliderComponent />} />
              <Route path="/select" element={<SelectComponent />} />
              <Route path="/file-upload" element={<FileUploadComponent />} />
              <Route path="/datepicker" element={<DatepickerComponent />} />
            </Routes>
          </Router>
        </div>
      </section>
    </div>
  );
}

export default App;
