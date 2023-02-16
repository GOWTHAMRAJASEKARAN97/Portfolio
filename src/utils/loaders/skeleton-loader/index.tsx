import { useMediaQuery } from "@mui/material";
import S from "./Skeleten.styled";
const SkeletonLayout = () => {
  const matches = useMediaQuery("(max-width:1140px)");
  return (
    <S.Container sx={{ width: matches ? "100%" : "50%" }}>
      <S.Name />
      <S.Mail />
      <S.Subject />
      <S.Message />
      <S.Button />
    </S.Container>
  );
};

export default SkeletonLayout;
