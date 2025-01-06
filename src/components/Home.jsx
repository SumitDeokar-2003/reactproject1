import React from "react";
import welcome from "../assets/welcome.png"
function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <img src={welcome} alt="welcome" />
    </div>
  )
}

export default Home;
