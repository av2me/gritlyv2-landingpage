import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styles from "../Stylesheets/roleSpecificTrainingCard.scss";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import Axios from "axios";

export default function RoleSpecificTrainingCard(props) {
  const { togglePopUp } = props;
  const handleClose = () => {
    togglePopUp(false);
  };
  const [programName, setProgramName] = React.useState("");
  const [programType, setProgramType] = React.useState("Technical");
  const [mailId, setMailId] = React.useState("");
  
  const API_KEY = 'keyzBRn4UbKaJURDp';
  const BASE_ID = 'appNYc0O78PZqeeQD';

  const headers = {
    'Authorization': 'Bearer '+ API_KEY,
    "Content-Type": "application/json"
  };

  const submitHandler = () => {
    Axios.post(`https://api.airtable.com/v0/${BASE_ID}/Training%20program`,
    {
      records: [
        {
          "fields": {
            "Training program name": programName,
            "Program type": programType,
            "Contact email": mailId
          }
        }
      ]
    },
    {
      headers: headers
    }
    )
    .then(() => {
      togglePopUp(false);
    })
  };

  return (
    <Card
      className={styles["main-modal-card"]}
      sx={{
        background:
          "linear-gradient(153.32deg,rgba(255, 255, 255, 0.3) -65.62%,rgba(255, 255, 255, 0.1) 83.28%)",
      }}
    >
      <CloseIcon
        style={{
          float: "right",
          paddingRight: "12px",
          paddingTop: "12px",
          cursor: "pointer",
          color: "white",
        }}
        onClick={handleClose}
      />
      <CardContent className={styles["card-content"]}>
        <Typography
          sx={{
            fontSize: "40px",
            fontFamily: "PT Sans",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "50px",
            textAlign: "center",
            letterSpacing: "-0.03em",
            background:
              "linear-gradient(90deg,#ffe27d 3.13%,#ffb543 31.38%,#61ffd5 74.27%,#3fb5ff 99.14%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
          }}
        >
          Role Specific Training
        </Typography>
        <br />
        <FormControl className={styles["form-content"]}>
          <FormLabel
            htmlFor="training-program-name"
            className={styles["training-program-label"]}
            sx={{
              fontSize: "30px",
              fontFamily: "PT Sans",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "50px",

              letterSpacing: "-0.03em",
              background:
                "linear-gradient(90deg,#ffe27d 3.13%,#ffb543 31.38%,#61ffd5 74.27%,#3fb5ff 99.14%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
            }}
          >
            1. Training Program Name
          </FormLabel>
          <TextField
            id="training-program-name"
            label="Type your answer here ..."
            variant="standard"
            sx={{
              width: "450px",
            }}
            onChange={(e) => {
              setProgramName(e.target.value);
            }}
          />

          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormLabel
              id="program-type"
              sx={{
                fontSize: "30px",
                fontFamily: "PT Sans",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "50px",
                letterSpacing: "-0.03em",
                background:
                  "linear-gradient(90deg,#ffe27d 3.13%,#ffb543 31.38%,#61ffd5 74.27%,#3fb5ff 99.14%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                "background-clip": "text",
              }}
            >
              2. Program Type
            </FormLabel>
            <FormControlLabel
              value="nontechnical"
              control={<Radio />}
              label="Non-Technical"
              style={{ color: "white" }}
              onClick={(e) => setProgramType(e.target.value)}
            />
            <FormControlLabel
              value="technical"
              control={<Radio />}
              label="Technical"
              style={{ color: "white" }}
              onClick={(e) => setProgramType(e.target.value)}
            />
          </RadioGroup>
          <FormLabel
            htmlFor="email"
            sx={{
              fontSize: "30px",
              fontFamily: "PT Sans",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "50px",
              letterSpacing: "-0.03em",
              background:
                "linear-gradient(90deg,#ffe27d 3.13%,#ffb543 31.38%,#61ffd5 74.27%,#3fb5ff 99.14%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
            }}
          >
            3. Contact Email
          </FormLabel>
          <TextField
            id="email"
            label="name@example.com"
            variant="standard"
            value={mailId}
            onChange={(e) => {
              setMailId(e.target.value);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              marginTop: "30px",
              marginLeft: "170px",
              color: "black",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "17px",
              width: "130px",
              height: "42px",
              textAlign: "center",
              background:
                "linear-gradient(90deg,#61ffd5 3.13%,#3fb5ff 38.24%,#ffe27d 68.01%,#ffb543 98.28%)",
            }}
            onClick={() => submitHandler()}
          >
            Submit
          </Button>
        </FormControl>
      </CardContent>
    </Card>
  );
}
