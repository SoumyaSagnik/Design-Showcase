import "../css/LinksButton.css";
import githubLogo from "../assets/github.png";
import linkLogo from "../assets/link.png";

const LinksButton = ({ type, link }) => {
  return (
    <button className="link-button">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={type === "github" ? githubLogo : linkLogo} alt={`${type}`} />
      </a>
    </button>
  );
};

export default LinksButton;
