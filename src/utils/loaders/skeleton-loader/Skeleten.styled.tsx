import { styled, Skeleton } from "@mui/material";

namespace S {
  export const Container = styled("div")({
    display: "grid",
    gridTemplateAreas: `
      ". nme nme nme ."
      ". mil mil mil ."
      ". sub sub sub ."
      ". msg msg msg ."
      ". . btn . ."
    `,
    gridTemplateRows: "auto auto auto auto auto",
    columnGap: ".5rem",
    rowGap: "1rem",
    height: "100%",
    width: "80%",
  });

  export const Name = styled(Skeleton)({
    backgroundColor: "grey",
    gridArea: "nme",
    marginTop: "1rem",
    height: "3rem",
  });

  Name.defaultProps = {
    variant: "rounded",
    animation: "pulse",
  };
  export const Mail = styled(Skeleton)({
    backgroundColor: "grey",
    gridArea: "mil",
    height: "3rem",
  });

  Mail.defaultProps = {
    variant: "rounded",
    animation: "pulse",
  };
  export const Subject = styled(Skeleton)({
    backgroundColor: "grey",
    gridArea: "sub",
    height: "3rem",
  });

  Subject.defaultProps = {
    variant: "rounded",
    animation: "pulse",
  };
  export const Message = styled(Skeleton)({
    backgroundColor: "grey",
    gridArea: "msg",
    height: "6rem",
  });

  Message.defaultProps = {
    variant: "rounded",
    animation: "pulse",
  };
  export const Button = styled(Skeleton)({
    backgroundColor: "grey",
    gridArea: "btn",
    height: "3rem",
    marginBottom: "1rem",
  });

  Button.defaultProps = {
    variant: "rounded",
    animation: "pulse",
  };
}

export default S;
