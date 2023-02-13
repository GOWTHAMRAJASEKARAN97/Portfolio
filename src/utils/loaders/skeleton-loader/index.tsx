import S from "./Skeleten.styled";

const SkeletonLayout = () => {
  return (
    <S.Container>
      <S.Name />
      <S.Mail />
      <S.Subject />
      <S.Message />
      <S.Button />
    </S.Container>
  );
};

export default SkeletonLayout;
