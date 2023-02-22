import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import './styles.css';

function App() {
  const [search, setSearch] = React.useState();
  return (
    <>
      <Navbar setSearch={setSearch} />
      <Outlet search={search} />
    </>
  )
}

export default App;
