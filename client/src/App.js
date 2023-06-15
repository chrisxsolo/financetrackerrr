import React from 'react';
import { Route, Routes, Navigate  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path="/">
          <Navigate to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Routes>
    </div>
  );
}

export default App;
