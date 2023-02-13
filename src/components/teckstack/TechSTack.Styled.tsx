import { styled } from "@mui/material";
import { SwiperSlide } from "swiper/react";

namespace S {
  export const StyledSwiperSlide = styled(SwiperSlide)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "25vh",
    img: {
      height: "60%",
    },
  });
  export const SwiperContainer = styled("div")({
    ".swiper-button-next:after": {
      size: "5%",
    },
    ".swiper-horizontal": {
      margin: "2rem 0",
    },
    padding: "1rem 0",
  });
  export const Container = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
}

export default S;
