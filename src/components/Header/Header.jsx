import logo from "../../assets/stars.svg";
import "./Header.css";
import { useContext } from "react";
import { GeneralInputContext } from "../../App";

export default function Header({ logged, userName }) {
  const setIsLogged = useContext(GeneralInputContext);
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo-wrapper">
          <img src={logo} alt="Logo" className="header__logo" />
        </div>
        <h1 className="header__title">Personal Dashboard</h1>
      </div>

      <div className="header__right">
        {!logged && (
          <p className="header__text">Please log in to access your dashboard</p>
        )}
        {logged && (
          <div className="header__text-wrapper">
            <p className="header__text">Welcome Back</p>
            <p className="header__text">
              <b style={{ color: "black" }}>{userName}</b>
            </p>
          </div>
        )}
        {logged && (
          <button
            type="button"
            className="header__button"
            onClick={() => {
              setIsLogged((prev) => !prev);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
              />
              <path
                fillRule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
              />
            </svg>
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
}
