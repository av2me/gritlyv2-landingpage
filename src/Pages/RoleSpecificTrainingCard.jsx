import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styles from "../Stylesheets/roleSpecificTrainingCard.scss";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function RoleSpecificTrainingCard() {
  return (
    <Card
      sx={{
        width: 500,
        
      }}
      className={styles["main-modal-card"]}
    >
      <CardContent>
        <div className={styles["modal-container-wrapper"]}>
          <div className={styles["content-body"]}>
            <FormControl>
              <FormLabel htmlFor="training-program-name">
                <h3>1.Training Program Name</h3>
              </FormLabel>
              <TextField
                id="training-program-name"
                label="Type your answer here ..."
                variant="standard"
                style={{ width: "450px" }}
              />

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormLabel id="program-type">
                  <h3>2.Program Type</h3>
                </FormLabel>
                <FormControlLabel
                  value="nontechnical"
                  control={<Radio />}
                  label="Non-Technical"
                />
                <FormControlLabel
                  value="technical"
                  control={<Radio />}
                  label="Technical"
                />
              </RadioGroup>
              <FormLabel htmlFor="email">
                <h3>3.Contact Email</h3>
              </FormLabel>
              <TextField
                id="email"
                label="name@example.com"
                variant="standard"
              />
              <Button
                type="submit"
                variant="contained"
                style={{
                  marginTop: "30px",
                  width: "450px",
                  backgroundColor: "#0e1555",
                }}
              >
                Submit
              </Button>
            </FormControl>
          </div>
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
