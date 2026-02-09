import logo from "../../assets/stars.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo-wrapper">
          <img src={logo} alt="Logo" className="header__logo" />
        </div>
        <h1 className="header__title">Personal Dashboard</h1>
      </div>

      <div className="header__right">
        <p className="header__text">Please log in to access your dashboard</p>
      </div>
    </header>
  );
}
