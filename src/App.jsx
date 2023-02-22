import React from 'react';
import { Outlet } from "react-router-dom";
import './styles.css';

function App() {
  const [search, setSearch] = React.useState();
  return (
    <>
      <Outlet search={search} />
    </>
  )
}

export default App;
