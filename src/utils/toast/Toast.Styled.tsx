import { styled } from "@mui/material";
import { ToastContainer } from "react-toastify";

namespace S {
  export const Toast = styled("div")(({ theme }) => ({
    fontWeight: "400",
    letterSpacing: "0.5px",
  }));

  export const ToastContainerStyled = styled(ToastContainer)({
    ".Toastify__toast": {
      color: "green",

      ".Toastify__close-button": {
        color: "black",
      },

      ".Toastify__toast-icon > svg": {
        fill: "white",
      },

      "&--success": {
        backgroundColor: "black",
      },
      "&--error": {
        backgroundColor: "red",
      },
      "&--warning": {
        backgroundColor: "orange",
      },
      "&--info": {
        "&, .Toastify__close-button": {
          color: "black",
        },

        ".Toastify__toast-icon > svg": {
          fill: "black",
        },
      },
    },
  });
}

export default S;
