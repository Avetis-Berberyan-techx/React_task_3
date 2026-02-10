import { useState, createContext, useEffect } from "react";
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

  //Session Persistence on Mount
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsLogged(true);
    }
  }, []); // runs only once on mount

  // Save user to localStorage on login
  useEffect(() => {
    if (isLogged) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    }
  }, [user, isLogged]);

  function HandleSignInInput(obj) {
    if (obj.userName !== "" && obj.email !== "") {
      setUser(obj);
      setIsLogged(true);
      console.log(obj);
    }
  }

  return (
    <>
      <GeneralInputContext.Provider value={{ user, setUser, setIsLogged }}>
        {/* <GeneralInputContext.Provider value={setIsLogged}> */}
        <Header logged={isLogged} userName={user.userName} />
        {/* </GeneralInputContext.Provider> */}

        {!isLogged && <SignIn HandleSignIn={HandleSignInInput} />}

        {isLogged && <LoggedPage userName={user.userName} email={user.email} />}
      </GeneralInputContext.Provider>
    </>
  );
}

export default App;
