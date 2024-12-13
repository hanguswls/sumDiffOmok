import { BookOpen, RotateCcw } from "lucide-react";
import { ButtonGroup, HeaderContainer, IconButton, Timer, TitleImg } from "./Header.styles";
import title from '/title.svg';
import useTimer from "../../../hooks/useTimer";

function Header() {
  const { displayTime } = useTimer();
  return (
    <HeaderContainer>
      <TitleImg src={title} alt="합차오목 타이틀" />
      <Timer>{ displayTime }</Timer>
      <ButtonGroup>
        <IconButton>
          <RotateCcw />
          다시하기
        </IconButton>
        <IconButton>
          <BookOpen />
          게임설명
        </IconButton>
      </ButtonGroup>
    </HeaderContainer>
  )
}

export default Header;