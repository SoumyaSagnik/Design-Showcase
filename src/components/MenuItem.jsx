import "../css/MenuItem.css";

const MenuItem = ({ category, filter, socialLink }) => {
  if (socialLink === undefined)
    return (
      <li className="c-item" onClick={() => filter()}>
        {category}
      </li>
    );
  else
    return (
      <li className="c-item">
        <a href={socialLink} target="_blank" rel="noreferrer">
          {category}
        </a>
      </li>
    );
};

export default MenuItem;
