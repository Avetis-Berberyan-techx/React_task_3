import "./SignIn.css";
import { useState, useContext, createContext } from "react";
import { GeneralInputContext } from "../../App";

function Input({ name }) {
  const { user, setUser } = useContext(GeneralInputContext);

  const fieldKey = name.toLowerCase() === "email" ? "email" : "userName";

  return (
    <div className="signin__field">
      <label htmlFor={fieldKey} className="signin__label">
        {name}
      </label>

      <input
        type={fieldKey === "email" ? "email" : "text"}
        id={fieldKey}
        name={fieldKey}
        className="signin__input"
        placeholder={`Enter your ${name.toLowerCase()}`}
        value={user[fieldKey]}
        onChange={(e) =>
          setUser((prev) => ({
            ...prev,
            [fieldKey]: e.target.value,
          }))
        }
        required
      />
    </div>
  );
}
export default function SignIn({ HandleSignIn }) {
  const { user, setUser } = useContext(GeneralInputContext);

  return (
    <section className="signin">
      <div className="signin__container">
        <h1 className="signin__title">Welcome Back</h1>
        <p className="signin__subtitle">
          Sign in to access your personal dashboard
        </p>

        <form className="signin__form">
          <Input name="User Name" />
          <Input name="Email" />

          <button
            type="button"
            className="signin__button"
            onClick={() => {
              HandleSignIn(user);
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
