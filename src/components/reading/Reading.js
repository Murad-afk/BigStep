import axios from "axios";
import React, { useEffect, useState } from "react";
import ReadingForm from "./ReadingForm";
import ReadingList from "./ReadingList";

function Reading() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
     const customersRes = await axios.get("http://localhost:5000/customer/");
   // const customersRes = await axios.get(
   //   "https://bigstep.herokuapp.com/customer/"
   // );
    setCustomers(customersRes.data);
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <ReadingForm getCustomers={getCustomers} />
      <ReadingList customers={customers} />
    </div>
  );
}

export default Reading;
