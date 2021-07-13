import React from 'react';
import { TextField } from '@material-ui/core';
import {createMuiTheme,makeStyles,createStyles,Theme as AugmentedTheme,ThemeProvider} from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1,
            input:{
                color: "white",
            },
            "& .MuiInputBase-input": {
              color: "#FFFFFF", // Text color
            },
            "& .MuiInputLabel-root": {
                color: "#FFFFFF", // Text color
              },
            "& .MuiFormLabel-root.Mui-disabled": {
                color: "white",
            },
            "& .MuiInputBase-root.Mui-disabled": {
                color: "white",
            },
            "& .MuiInput-underline:before": {
              display: "none",
              borderBottom: "none", // Semi-transparent underline
            },
            "& .MuiInput-underline:hover:before": {
              display: "none",
              borderBottom: "none", // Solid underline on hover
            },
            "& .MuiInput-underline:after": {
              display: "none",
              borderBottom: "none", // Solid underline on focus
            },
          },
    }
    ));

const TextFieldComponent = ({label , variant}) => {
    const classes = useStyles();
    return (
    <TextField className = {classes.root} id="basic" label={label} InputProps={{ style : {color : "white"} }}  />
    // className: classes.root, disableUnderline: true
    );
}

export default TextFieldComponent;