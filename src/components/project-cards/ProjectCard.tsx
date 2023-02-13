import { FC, useState } from "react";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { IoNavigateSharp } from "react-icons/io5";
import S from "./ProjectCard.Styled";

interface Props {
  title: string;
  image: any;
  text: string;
  view: string;
  source: string;
  techstack: (string | IconType)[];
}

const WorkCard: FC<Props> = ({
  title,
  image,
  text,
  view,
  source,
  techstack,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <S.Card
      sx={{ backgroundColor: hover ? "rgba(0,0,0,.2)" : "" }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <img
        src={image}
        alt="project"
        style={{ filter: hover ? "blur(5px)" : "" }}
      />
      <S.Title sx={{ filter: hover ? "blur(5px)" : "" }}>{title}</S.Title>
      <S.Details sx={{ filter: hover ? "blur(5px)" : "" }}>
        <p>{text}</p>
      </S.Details>
      {hover ? (
        <S.ProjectNavigators
          sx={{ transform: hover ? "translate(0,-80%)" : "" }}
        >
          <a href={view} target={"_blank"} rel="noreferrer">
            <IoNavigateSharp
              size={75}
              style={{
                color: "rgb(8, 71, 22)",
                marginRight: "1rem",
              }}
            />
          </a>
          <a href={source} target={"_blank"} rel="noreferrer">
            <FaGithub
              size={75}
              style={{
                color: "rgb(8, 71, 22)",
                marginRight: "1rem",
              }}
            />
          </a>
        </S.ProjectNavigators>
      ) : (
        <S.TechStack>
          {techstack.map((i, idx) => {
            const Icon = i;
            return (
              <>
                <Icon style={{ fontSize: "50", color: "rgb(8, 71, 22)" }} />
              </>
            );
          })}
        </S.TechStack>
      )}
    </S.Card>
  );
};

export default WorkCard;
