import React from "react";

import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

export default function GenericModal(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { open, togglePopUp, children } = props;
  const handleClose = () => {
    togglePopUp(false);
  };
  return (
    <Dialog
      classes={{
        root: "generic-modal-root",
        container: "generic-modal-container",
        paper: "generic-modal-paper",
      }}
      style={{
        backdropFilter: "blur(15px)",
      }}
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <div className={"close-container"} onClick={handleClose}>
        <CloseIcon style={{ float: "right" }} />
      </div>
      {children}
    </Dialog>
  );
}
