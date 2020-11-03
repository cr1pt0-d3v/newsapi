import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const options = [
  { label: "Germany", value: "de" },
  { label: "United States", value: "us" },
  { label: "Romania", value: "ro" },
  { label: "Great Britain", value: "gb" },
  { label: "Netherlands", value: "nl" },
  { label: "France", value: "fr" },
];

const CountryButton = () => {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  console.log("country", country);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={country}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountryButton;
