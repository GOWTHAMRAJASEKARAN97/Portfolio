import { Button, styled } from "@mui/material";
namespace S {
  export const FormContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(70, 70, 70, 0.4)",
  });
  export const Form = styled("form")({
    display: "grid",
    gridTemplateAreas: `
    "nme nme"
    "mil mil"
    "sub sub"
    "msg msg"
    `,
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto auto auto 120px",
    gap: "1rem",
    padding: "1.5rem 1rem",
    "& .MuiFormHelperText-root": {
      color: "red",
      margin: " .2rem 0",
    },
  });
  export const StyledButton = styled(Button)({
    textTransform: "uppercase",
    backgroundColor: "rgb(8, 71, 22,.5)",
    padding: ".5rem 1rem",
    margin: "1rem",
    border: "none",
    borderRadius: ".5rem",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(8, 71, 22)",
    },
  });
  export const LoaderContainer = styled("div")(({ theme }) => ({
    position: "absolute",
    height: "26rem",
    width: "100%",
    backgroundColor: "rgba(0,0,0,.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // transform: "translate(0,123%)",
  }));
}
export default S;
