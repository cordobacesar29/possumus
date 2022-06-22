import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Header } from "./components/Header";
import {useUser} from "./context/UserContext";

function App() {  
  const {user, logOut} = useUser();
  return (
    <BrowserRouter>
        <Header logOut={logOut} user={user}/>
        <Routes>
          <Route path="" element={user ? <Home /> : <Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
