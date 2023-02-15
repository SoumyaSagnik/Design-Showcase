import "../css/LinksButton.css";

const LinksButton = ({ type, link }) => {
  return (
    <button className="link-button">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={`../src/assets/${type}.png`} alt={`${type}`} />
      </a>
    </button>
  );
};

export default LinksButton;
