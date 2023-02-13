declare module "@mui/material/styles" {
  interface Palette {
  palette: {
    mode: string,
    primary: {
      main: string,
      light: string,
      bg:string
    },
  }
}

  interface PaletteOptions {
   palette?: {
    mode: string,
    primary: {
      main: string,
      light: string,
    },
}
  }
}

export {};
