import { useState, useEffect } from "react";
import "./Dashboard.scss";
import DeityList from "../../components/DeityList/DeityList";
import Form from "../../components/Form/Form";
import Home from "../../components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {
  const [deities, setDeities] = useState([]);

  const getDeities = () => {
    fetch("http://localhost:8080/deities")
      .then(res => res.json())
      .then(json => setDeities(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDeities();
  }, [deities]);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deities" element={<DeityList deities={deities} />} />
        <Route path="/new-deity" element={<Form />} />
      </Routes>
    </Router>
  )
}

export default Dashboard