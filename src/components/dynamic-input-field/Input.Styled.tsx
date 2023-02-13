import { styled, TextField } from "@mui/material";

namespace S {
  export const CommonInputStyled = styled(TextField, {
    shouldForwardProp: (prop) =>
      prop !== "gridArea" && prop !== "fullHeight" && prop !== "textarea",
  })<{
    gridArea?: string;
    fullHeight?: boolean;
  }>(({ gridArea, fullHeight }) => ({
    ...(gridArea ? { gridArea } : null),
    fontSize: ".9rem",
    input: {
      color: "white",
      webkitBoxShadow: "none",
    },
    textarea: {
      color: "white",
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    ".MuiOutlinedInput-root": {
      height: fullHeight ? "100%" : "2.7rem",
      "& fieldset": {
        borderColor: "white",
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },

      input: {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            "0 0 0 50px rgba(0, 0, 0, .87) inset" /* Change the color to your own background color */,
          WebkitTextFillColor: "white",
        },
        "&:-webkit-autofill:focus": {
          WebkitBoxShadow:
            "0 0 0 50px rgba(0, 0, 0, .87) inset" /* Change the color to your own background color */,
          WebkitTextFillColor: "white",
        },
      },
    },

    ".MuiFormLabel-root": {
      fontSize: ".9rem",
      color: "white",
      zIndex: "0",
    },
    "& label.Mui-focused": {
      color: "white",
    },
  }));

  CommonInputStyled.defaultProps = {
    inputProps: { noValidate: true },
  };

  export const TextInput = styled(CommonInputStyled)<{
    hide?: boolean;
    textarea?: boolean;
  }>(({ hide, textarea }) => ({
    ...(hide
      ? {
          padding: "0 !important",
          border: "0 !important",
          width: "0 !important",
          height: "0 !important",
          ".MuiInputBase-input, .MuiOutlinedInput-notchedOutline": {
            padding: "0 !important",
            border: "0 !important",
            width: "0 !important",
            height: "0 !important",
          },
        }
      : null),
    ...(textarea
      ? {
          ".css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
            top: 10,
            position: "absolute",
            width: "95% !important",
          },
        }
      : null),
    "& .Mui-disabled": {
      // backgroundColor: "transparent",
    },
  }));
}

export default S;
