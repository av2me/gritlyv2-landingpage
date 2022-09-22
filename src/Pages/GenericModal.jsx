import React from "react";

import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../Stylesheets/GenericModal.scss";
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
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      {children}
    </Dialog>
  );
}
