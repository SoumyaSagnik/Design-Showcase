import "../css/Header.css";
import MenuItem from "./MenuItem";
import { useState } from "react";

const Header = ({ applyFilter, logoClick }) => {
  const [categoryMenu, setCategoryMenu] = useState(false);
  const [socialMenu, setSocialMenu] = useState(false);
  return (
    <header>
      <div id="logo" onClick={() => logoClick()}>
        Design
      </div>
      <nav className="menu">
        <ul>
          <li
            id="category"
            onMouseEnter={() => setCategoryMenu(true)}
            onMouseLeave={() => setCategoryMenu(false)}
          >
            Category
          </li>
          <li
            id="socials"
            onMouseEnter={() => setSocialMenu(true)}
            onMouseLeave={() => setSocialMenu(false)}
          >
            Socials
          </li>
        </ul>
        {categoryMenu && (
          <div
            className="category-menu"
            onMouseEnter={() => setCategoryMenu(true)}
            onMouseLeave={() => setCategoryMenu(false)}
          >
            <MenuItem
              category={"Mouse Trail"}
              filter={() => applyFilter("Mouse Trail")}
            />
            <MenuItem category={"Cards"} filter={() => applyFilter("Cards")} />
          </div>
        )}
        {socialMenu && (
          <div
            className="social-menu"
            onMouseEnter={() => setSocialMenu(true)}
            onMouseLeave={() => setSocialMenu(false)}
          >
            <MenuItem
              category={"Portfolio"}
              socialLink={"http://portfolio.soumyakhanda.tech/"}
            />
            <MenuItem
              category={"Blogs"}
              socialLink={"https://blogs-ssk.netlify.app/"}
            />
            <MenuItem
              category={"Linkedin"}
              socialLink={
                "https://www.linkedin.com/in/soumya-sagnik-khanda-0446641b8/"
              }
            />
            <MenuItem
              category={"GitHub"}
              socialLink={"https://github.com/SoumyaSagnik/"}
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
