import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import UserDetails from "./pages/user-details/UserDetails";

const Page404 = () => {
  return (
    <div>
      <h1>404</h1>
      <h1>Page now found</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users">
          <Route path=":userId" element={<UserDetails />} />
        </Route>

        <Route path="*" element={<Page404 />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
