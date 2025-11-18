import "../index.css";

//react imports
import { useEffect, useState } from "react";

//rrd imports
import { Link, useParams } from "react-router-dom";

function Navbar() {
  const { title } = useParams();

  const themeFromLocalStorage = () => {
    return localStorage.getItem("theme") || "light";
  };

  const [theme, setTheme] = useState(themeFromLocalStorage);
  const color = theme === "dark-mode" ? "white" : "#313e51";

  //toogle light&dark function
  const handleThemeToggle = () => {
    const newTheme = theme == "dark-mode" ? "light" : "dark-mode";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
    localStorage.setItem("darkMode", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="header-container container">
        <div>
          <h1>
            {title && (
              <Link className="header-logo">
                <figure>
                  <img
                    src={`../assets/icon-${title.toLowerCase()}.svg`}
                    alt={`${title} icon`}
                  />
                </figure>
                {/* <h3>{title}</h3> */}
                <h3 style={{ color }}>{title}</h3>
              </Link>
            )}
          </h1>
        </div>
        <div>
          <div className="dark-btn" onClick={handleThemeToggle}>
            <input type="checkbox" checked={theme == "dark-mode"} readOnly />
            <span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
