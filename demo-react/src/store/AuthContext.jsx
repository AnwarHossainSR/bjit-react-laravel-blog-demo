import React, { useState, useEffect } from "react";
import url from "../config";
import { fetchAll } from "../api/Api";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const histry = useHistory();
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.clear();
    setIsLoggedIn( false );
    toast.error("Session cleared !", {
      position: "bottom-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme:'dark',
      progress: undefined,
    });
    histry.push("/")
  };

  const loginHandler = async (email, password) => {
    const users = await (
      await fetchAll(`${url.basePublicUrl}/users`)
    ).data.users;
    console.log(users[0]);
    users
      .filter((user) => user.email === email && user.password === password)
      .map((filteredPerson) => {
        localStorage.setItem("user-info", JSON.stringify(filteredPerson));
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        toast.success("Login successfull", {
          position: "bottom-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme:'dark',
          progress: undefined,
        });
        return histry.push("/");
      });
    if (!localStorage.getItem("isLoggedIn")) {
      toast.error("Email or password is not matched", {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:'dark',
        progress: undefined,
      });
      return setError("Email or password is not matched");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        error: error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
