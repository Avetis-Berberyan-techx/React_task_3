import { useState, createContext } from "react";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import "./App.css";
import LoggedPage from "./components/loggedPage/LoggedPage";

export const GeneralInputContext = createContext(null);

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    email: "",
  });

  function HandleSignInInput(obj) {
    if (obj.userName !== "" && obj.email !== "") {
      setUser(obj);
      setIsLogged(true);
      console.log(obj);
    }
  }

  return (
    <>
      <GeneralInputContext.Provider value={[user, setUser]}>
        <GeneralInputContext.Provider value={setIsLogged}>
          <Header logged={isLogged} userName={user.userName} />
        </GeneralInputContext.Provider>

        {!isLogged && <SignIn HandleSignIn={HandleSignInInput} />}

        {isLogged && <LoggedPage userName={user.userName} email={user.email} />}
      </GeneralInputContext.Provider>
    </>
  );
}

export default App;
