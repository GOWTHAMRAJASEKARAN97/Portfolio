//@ts-ignore
import React1 from "../../assets/react1.jpg";
//@ts-ignore
import React2 from "../../assets/react2.jpg";
import S from "./AboutContent.Styled";

const AboutContent = () => {
  return (
    <S.About>
      <S.Left>
        <h1>Who Am I?</h1>
        <p>
          Iam a react front-end developer.I create responsive secure websites.
        </p>
        <S.StyledLink to="/contact">Contact</S.StyledLink>
      </S.Left>
      <S.Right>
        <S.ImgContainer>
          <S.Top>
            <img src={React1} className="img" alt="react" />
          </S.Top>
          <S.Bottom>
            <img src={React2} className="img" alt="react" />
          </S.Bottom>
        </S.ImgContainer>
      </S.Right>
    </S.About>
  );
};

export default AboutContent;
