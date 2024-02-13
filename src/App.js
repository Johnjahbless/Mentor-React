import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import ProtectedRoutes from './Components/ProtectedRoutes'
import PublicRoutes from './Components/PublicRoutes'
import { Workspace } from "./Components/Workspace";
import { Profile } from "./Components/Profile";


function App() {
  const location = useLocation().pathname;

  const locationSplit = location.split("/");
  const locationParent = locationSplit[1];
  const WithoutRouter = ["auth", "error"];

  return (
    <div className="App">
       {" "}
      <>
        {" "}
        {!WithoutRouter.includes(locationParent) ? (
          <>
          <Header />
          <Sidebar />
        </>
      ) : (
        ""
      )}{" "}
     <Routes> 
      <Route path="/" element={<ProtectedRoutes/>}>
      <Route path="/" element={<Navigate to="/auth/login" replace />} exact />
     <Route path={"/dashboard"} element={<Dashboard />} exact />
     <Route path="/workspace/:id" element={<Workspace />} exact />
     <Route path="/profile/:id" element={<Profile />} exact />
     </Route>

     <Route path="/" element={<PublicRoutes/>}>
      <Route path="/auth/login" element={<Login/>} exact />
      <Route path="/auth/register" element={<Register/>} exact />
      </Route>
     </Routes>
     </>{" "}
    </div>
  );
}

export default App;
