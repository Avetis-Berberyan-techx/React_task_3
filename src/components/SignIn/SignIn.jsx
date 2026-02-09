import "./SignIn.css";
import { useState, useContext, createContext } from "react";

const GeneralInputContext = createContext(null);

function Input({ name }) {
  const { signInInput, setSignInInput } = useContext(GeneralInputContext);

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
        value={signInInput[fieldKey]}
        onChange={(e) =>
          setSignInInput((prev) => ({
            ...prev,
            [fieldKey]: e.target.value,
          }))
        }
        required
      />
    </div>
  );
}
export default function SignIn() {
  const [signInInput, setSignInInput] = useState({
    userName: "",
    email: "",
  });

  return (
    <section className="signin">
      <div className="signin__container">
        <h1 className="signin__title">Welcome Back</h1>
        <p className="signin__subtitle">
          Sign in to access your personal dashboard
        </p>

        <GeneralInputContext.Provider value={{ signInInput, setSignInInput }}>
          <form className="signin__form">
            <Input name="User Name" />
            <Input name="Email" />

            <button
              type="submit"
              className="signin__button"
              onClick={() => {
                console.log(signInInput);
              }}
            >
              Sign In
            </button>
          </form>
        </GeneralInputContext.Provider>
      </div>
    </section>
  );
}
