import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [savedQuotes, setSavedQuotes] = useState([]);
  async function getLoggedIn() {
    // const loggedInRes = await axios.get("https://bigstep.herokuapp.com/auth/loggedIn");
    const loggedInRes = await axios
      .get("  http://localhost:5000/auth/loggedIn")
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
          "http://localhost:5000/quote/saveget" // your URL
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
