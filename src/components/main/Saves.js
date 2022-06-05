import React, {useEffect, useState, useContext} from 'react'
import Navbar from "./Navbar";
import './Saves.css'
import axios from 'axios'
import AuthContext from "../../context/AuthContext";

const Saves = () => {
  const { getSavedQuotes, savedQuotes } = useContext(AuthContext);

useEffect(() => {
  getSavedQuotes()
}, [])

  return (
    <div className="saves">
      <h1 className="saves-header">Saves Feed</h1>
      {savedQuotes.concat().reverse().map((val, key) => {
        return (
          <div className="quote">
           
            <li key={key._id} className="quote-text">
              {val.savedQuote}
            </li>
            {console.log(val)}
          
          </div>
        );
      })}
                  <Navbar />

    </div>
  )
}

export default Saves