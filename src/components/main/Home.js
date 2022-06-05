import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Header from "./Header";
import axios from "axios";
import { IconContext } from "react-icons";
import { MdFavorite } from "react-icons/md";
import AuthContext from "../../context/AuthContext";
const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const { getSavedQuotes, savedQuotes } = useContext(AuthContext);

  const getQuotes = async () => {
    try {
      let result = await axios.get(
        // any call like get
        "https://muradsquote.herokuapp.com/quote/get" // your URL
      );
      setQuotes(result.data);
    
    } catch (error) {
      console.error(error);
    }
  };
const saveHandler =(val) =>{
      axios.post("https://muradsquote.herokuapp.com/quote/save", {
        savedQuote: val
      })

      getSavedQuotes()
      console.log(savedQuotes)
}

  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <div className="home">
      <Header />
      {quotes.concat().reverse().map((val, key) => {
        return (
          <div className="quote">
           
            <li key={key._id} className="quote-text">
              {val.quote}
            </li>
            <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <MdFavorite onClick={() =>saveHandler(val.quote)} />
              </IconContext.Provider>
          </div>
        );
      })}

      <Navbar getQuotes={getQuotes} />
    </div>
  );
};

export default Home;
