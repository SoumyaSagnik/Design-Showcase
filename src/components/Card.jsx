import "../css/Card.css";
import LinksButton from "./LinksButton";

const Card = ({ desc, link, git }) => {
  return (
    <div className="card">
      {desc}
      <div className="links">
        <LinksButton type={"link"} link={link} />
        <LinksButton type={"github"} link={git} />
      </div>
    </div>
  );
};

export default Card;
