import { Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Parallax, Autoplay } from "swiper";
import S from "./TechSTack.Styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import html from "../../assets/techstack/htmlLogo.svg";
import css from "../../assets/techstack/cssLogo.svg";
import js from "../../assets/techstack/javascriptLogo.svg";
import react from "../../assets/techstack/reactLogo.svg";
import reactQuery from "../../assets/techstack/reactQueryLogo.svg";
import reactRedux from "../../assets/techstack/reduxLogo.svg";
import sass from "../../assets/techstack/sassLogo.svg";
import styledComponents from "../../assets/techstack/styledComponentsLogo.png";
import mui from "../../assets/techstack/mui.png";

const TechStack = () => {
  const stackArray: string[] = [
    html,
    css,
    js,
    react,
    reactQuery,
    reactRedux,
    sass,
    styledComponents,
    mui,
  ];
  return (
    <>
      <div
        id="techStack"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <h1>TeckStack</h1>
      </div>
      <S.SwiperContainer sx={{ backgroundColor: "#000" }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Parallax, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          {stackArray.map((i, index) => {
            return (
              <>
                <S.StyledSwiperSlide>
                  <img key={index} src={i} alt={i} />
                </S.StyledSwiperSlide>
              </>
            );
          })}
        </Swiper>
      </S.SwiperContainer>
    </>
  );
};
export default TechStack;
