import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Rosales-Components/WelcomePage";
import LoginPage from "./Rosales-Components/LoginPage";
import SignUpPage from "./Rosales-Components/SignUpPage";
import Home from "./Rosales-Components/Home";
import DirectMessages from "./Rosales-Components/DirectMessages";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  const [savedUsers, setSavedUsers] = useState(
    JSON.parse(localStorage.getItem("savedUsers")) || []
  );

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    if (loggedInUser) {
      const uniqueSavedUsers = savedUsers.filter(
        (user) =>
          user.username !== loggedInUser.username &&
          user.password !== loggedInUser.password
      );

      localStorage.setItem(
        "savedUsers",
        JSON.stringify([...uniqueSavedUsers, loggedInUser])
      );
    }
  }, [loggedInUser]);

  return (
    <Router>
      <header className="headerContainer"></header>

      <main className="mainContainer">
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/signup"
            element={<SignUpPage savedUsers={savedUsers} />}
          />
          <Route
            path="/login"
            element={<LoginPage setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/home" element={<Home user={loggedInUser} />} />
          <Route
            path="/direct-messages"
            element={<DirectMessages user={loggedInUser} />}
          />
          {/* <Route path="/channels" element={<Channels user={loggedInUser} />} /> */}
        </Routes>
      </main>

      <footer>
        <h6>2023 Slack-like App</h6>
      </footer>
    </Router>
  );
}

export default App;
