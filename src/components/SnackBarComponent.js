import React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import { Slide } from "@mui/material";
import { Typography } from "@mui/material";

function SnackBarComponent() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        onClick={handleClose}
      >
        Undo
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  // Snackbar with directions & action
  const [state, setState] = React.useState({
    newopen: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, newopen } = state;

  const newhandleClick = (newState) => () => {
    setState({ ...newState, newopen: true });
  };

  const newhandleClose = () => {
    setState({ ...state, newopen: false });
  };

  return (
    <>
      <Typography variant="h1">Snackbar Demo</Typography>
      <div className="custom-box">
        <div className="row">
          <div className="col">
            <Typography variant="p">Basic snackbar</Typography>
            <Button onClick={handleClick} variant="contained">
              Open Snackbar
            </Button>
            <Snackbar
              open={open}
              onClose={handleClose}
              message="Wohoo🎉🎉!! You opened me."
              action={action}
              // autoHideDuration={6000}
            />
          </div>
          <div className="col">
            <Typography variant="p">
              Snackbar with directions & action
            </Typography>
            <Button
              variant="contained"
              onClick={newhandleClick({ vertical: "top", horizontal: "right" })}
            >
              Play Action
            </Button>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={newopen}
              onClose={newhandleClose}
              autoHideDuration={2000}
              key={vertical + horizontal}
              TransitionComponent={Slide}
            >
              <Alert
                // onClose={newhandleClose}
                severity="success"
                variant="filled"
                // sx={{ width: "100%" }}
              >
                This is a success Alert inside a Snackbar!
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </>
  );
}
export default SnackBarComponent;
