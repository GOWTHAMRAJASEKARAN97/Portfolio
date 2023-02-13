import { FC } from "react";
import { useMediaQuery } from "@mui/material";
import S from "./DynamicWelcomeNote.Styled";
interface Props {
  heading: string;
  text: string;
  background: any;
}
const DynamicWelcomeNote: FC<Props> = ({ heading, text, background }) => {
  const matches = useMediaQuery("(max-width:640px)");
  return (
    <S.WelcomeNote
      className="welcome-note"
      sx={{ "&::before": { backgroundImage: `url(${background})` } }}
    >
      <S.Heading className="heading">
        <h1 style={{ fontSize: matches ? "2rem" : "2.4rem" }}>{heading}</h1>
        <p>{text}</p>
      </S.Heading>
    </S.WelcomeNote>
  );
};

export default DynamicWelcomeNote;
