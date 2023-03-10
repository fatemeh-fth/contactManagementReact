import Navbar from "./components/Navbar";
import Contacts from "./components/contact/Contacts";

import "./App.css";
import { useState } from "react";

const App = () => {

  const [getContacts, setContacts] = useState([]);
  const [loading, setLoading] = useState (false);
  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading} />
    </div>
  );
};

export default App;
