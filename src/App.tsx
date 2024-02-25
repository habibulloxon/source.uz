import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import SourceLogo from "./assets/source-logo.svg";

const App: React.FC = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleButtonClick = () => {
    setIsTrue(!isTrue);
  };

  const handleNavLinkClick = () => {
    setIsTrue(!isTrue);
  };

  return (
    <Container className="container">
      <header className="header">
        <nav className={"navbar-wrapper"}>
          <div className={"logo-wrapper"}>
            <a href="#" className="header__logo-link">
              <img src={SourceLogo} alt="logo" className="header__logo" />
            </a>
            <button
              className={"menu-toggle"}
              id="toggle-button"
              onClick={handleButtonClick}
            >
              menu
            </button>
          </div>

          {isTrue && (
            <ul className={"navbar__list-mobile"}>
              <li className={"navbar__item"}>
                <a
                  className={"navbar__link"}
                  href="#"
                  onClick={handleNavLinkClick}
                >
                  Projects
                </a>
              </li>
              <li className={"navbar__item"}>
                <a
                  className={"navbar__link"}
                  href="#"
                  onClick={handleNavLinkClick}
                >
                  Services
                </a>
              </li>
              <li className={"navbar__item"}>
                <a
                  className={"navbar__link"}
                  href="#"
                  onClick={handleNavLinkClick}
                >
                  Spheres
                </a>
              </li>
              <li className={"navbar__item"}>
                <a
                  className={"navbar__link"}
                  href="#"
                  onClick={handleNavLinkClick}
                >
                  About us
                </a>
              </li>
              <li className={"navbar__item"}>
                <a
                  className={"navbar__link"}
                  href="#"
                  onClick={handleNavLinkClick}
                >
                  Contact us
                </a>
              </li>
              <li className={"navbar__item"}>
                <a className={"navbar__link"} href="tel:+998993406297">
                  +998 99 340 62 97
                </a>
              </li>
            </ul>
          )}

          <ul className={"navbar__list"}>
            <li className={"navbar__item"}>
              <a className={"navbar__link"} href="#">
                Projects
              </a>
            </li>
            <li className={"navbar__item"}>
              <a className={"navbar__link"} href="#">
                Services
              </a>
            </li>
            <li className={"navbar__item"}>
              <a className={"navbar__link"} href="#">
                Spheres
              </a>
            </li>
            <li className={"navbar__item"}>
              <a className={"navbar__link"} href="#">
                About us
              </a>
            </li>
            <li className={"navbar__item"}>
              <a className={"navbar__link"} href="#">
                Contact us
              </a>
            </li>
            <li>
              <a className={"header__phone-link"} href="tel:+998993406297">
                +998 99 340 62 97
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default App;
