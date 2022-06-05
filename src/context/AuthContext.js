import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [savedQuotes, setSavedQuotes] = useState([]);
  async function getLoggedIn() {
    // const loggedInRes = await axios.get("https://muradsquote.herokuapp.com/auth/loggedIn");
    const loggedInRes = await axios
      .get(" https://muradsquote.herokuapp.com/auth/loggedIn")
      .then((res) => {
        setLoggedIn(res.data);
      })
      
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  const getSavedQuotes = async() =>{
      try {
        let result = await axios.get(
          // any call like get
          "https://muradsquote.herokuapp.com/quote/saveget" // your URL
        );
        setSavedQuotes(result.data);
      
      } catch (error) {
        console.error(error);
      
    };
  }
  
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn, getSavedQuotes, savedQuotes }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
