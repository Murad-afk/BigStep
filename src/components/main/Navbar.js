import { Link } from "react-router-dom";

import React, { useState } from "react";
import "./Navbar.css";
import { HiHome } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import axios from "axios";
const Navbar = ({getQuotes}) => {
  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (quote.length >= 6) {
      setOpen(!open);
      setQuote("");

      try {
        let result = await axios.post(
          // any call like get
          "https://muradsquote.herokuapp.com/quote/add", // your URL
          {
            // data if post, put
            quote,
          }
        );
        getQuotes()
      } catch (error) {
        console.error(error); // NOTE - use "error.response.data` (not "error")
      }
    }
  };
  return (
    <div className="navbar">
      {open ? (
        <form onSubmit={handleSubmit} className="popup">
          <div className="popup-main">
            <h1 className="popup-text">Write a quote</h1>
            <textarea  name="w3review" rows="4" cols="50"
              placeholder=""
              onChange={(e) => setQuote(e.target.value)}
            ></textarea>
            <button>Submit</button>
          </div>
          <IconContext.Provider value={{ color: "white", size: "35px" }}>
            <AiOutlineClose
              onClick={() => setOpen(!open)}
              className="close-btn"
            />
          </IconContext.Provider>
        </form>
      ) : (
        <nav>
          <h1 className="header-text">
            <span>Quote</span>stagram
          </h1>
          <div className="links">
            {" "}
            <Link to="/home">
              <IconContext.Provider value={{ color: "white", size: "35px" }}>
                {" "}
                <HiHome />
              </IconContext.Provider>
            </Link>
            <IconContext.Provider value={{ size: "35px" }}>
              <AiOutlinePlus
                className="add-btn"
                onClick={() => setOpen(!open)}
              />
            </IconContext.Provider>
            <Link to="/saves">
              <IconContext.Provider value={{ color: "white", size: "35px" }}>
                <MdFavorite />
              </IconContext.Provider>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
