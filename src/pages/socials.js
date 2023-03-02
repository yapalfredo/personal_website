import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/Ai";

export default function SocialIcons(props) {
  const renderIcon = (icon) => {
    switch (icon) {
      case "git":
        return <AiFillGithub />;
      case "linkedin":
        return <AiFillLinkedin />;
      case "email":
        return <AiFillMail />;
      default:
        return;
    }
  };

  return (
    <a href={props.url} target="_blank">
      {renderIcon(props.icon)}
    </a>
  );
}
